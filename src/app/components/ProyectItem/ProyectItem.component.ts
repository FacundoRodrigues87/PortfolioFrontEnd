import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Proyecto } from 'src/app/model/Proyecto';
import { SProyectosService } from 'src/app/services/Proyectos.service';
import { usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ProyectItem',
  templateUrl: './proyectitem.component.html',
  styleUrls: ['./proyectitem.component.css'],
})
export class ProyectItemComponent {
  title = 'Entre Diosas y Reinas';
  constructor(private renderer: Renderer2, private sPro:SProyectosService, private tokenService: TokenService, private usuarioService:UsuarioService) {}

  proyectos:Proyecto[] = [];
  isLogged = false;
  isAdmin = false;
  idProyecto!: number;
  idUsuario = new usuario ('', '', '', '', [], [], [], [])

  @ViewChild('nuevaexp') nuevaexp!:ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('urlfoto') urlfoto!: ElementRef;
  @ViewChild('empre') empre!: ElementRef;
  @ViewChild('desc') desc!: ElementRef;
  @ViewChild('urlpro') urlpro!: ElementRef;
  @ViewChild('id') id!: ElementRef;

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe((data) => {
      this.idUsuario = data;
    });
    this.cargarPro();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    }

    isUserAdmin(): boolean {
      const roles = this.tokenService.getAuthorities();
      return roles.includes('ROLE_ADMIN');
    }

    cargarPro(): void{
    this.sPro.lista().subscribe(data => {this.proyectos = data;})
  }

  deletepro(id: HTMLElement) {
    const iddelete = parseInt(id.innerText);
    this.sPro.delete(iddelete).subscribe(() => {
      console.log('Proyecto eliminado correctamente');
    });;
  }
  reloadPage() {
    location.reload();
  }

  editPro(id: HTMLElement, empre: HTMLInputElement, desc: HTMLInputElement, urlfoto: HTMLInputElement, urlpro: HTMLInputElement){
    let idpro = parseInt(id.innerText);
    let newtitle = empre.value;
    let newdesc = desc.value;
    let urlImagen = urlfoto.value;
    let newurl = urlpro.value;
    let pro = new Proyecto(newtitle, newdesc, newurl, urlImagen, this.idUsuario);
    this.sPro.update(idpro, pro).subscribe(() => {
      console.log('Experiencia actualizada correctamente');
    });
  }

  showUpdate(modifi: HTMLElement) {
    modifi.style.display = 'flex';
  }
  cerrarUpdate(modifi: HTMLElement) {
    modifi.style.display = 'none';
  }
}
