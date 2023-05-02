import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { usuario } from 'src/app/model/Usuario.model';
import { SProyectosService } from 'src/app/services/Proyectos.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
})
export class ProyectComponent {
  constructor(private renderer: Renderer2, private sPro:SProyectosService, private usuarioService:UsuarioService, private tokenService:TokenService) {}
  idUsuario = new usuario ('', '', '', '', [], [], [], [])

  @ViewChild('nuevaexp') nuevaexp!:ElementRef;
  @ViewChild('urlfoto') urlfoto!: ElementRef;
  @ViewChild('empre') empre!: ElementRef;
  @ViewChild('desc') desc!: ElementRef;
  @ViewChild('urlpro') urlpro!: ElementRef;

  ngOnInit() {
    this.usuarioService.getUser().subscribe((data) => {
      this.idUsuario = data;
    });
  }

  reloadPage() {
    location.reload();
  }

  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }

  showNueva() {
    this.renderer.setStyle(this.nuevaexp.nativeElement, 'display', 'flex');
  }

  cancelNueva() {
    this.renderer.setStyle(this.nuevaexp.nativeElement, 'display', 'none');
  }

  CrearPro(){
    let newtitle = this.empre.nativeElement.value;
    let newdesc = this.desc.nativeElement.value;
    let urlImagen = this.urlfoto.nativeElement.value;
    let newurl = this.urlpro.nativeElement.value;
    let pro = new Proyecto(newtitle, newdesc, newurl, urlImagen, this.idUsuario);
    this.sPro.save(pro).subscribe(() => {
      console.log('Experiencia creada correctamente');
    });
  }
}


