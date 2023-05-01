import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-eduitem',
  templateUrl: './eduitem.component.html',
  styleUrls: ['./eduitem.component.css'],
})
export class EduitemComponent {
  constructor(private renderer: Renderer2, private sEdu:SEducacionService, private tokenService: TokenService) {}
  educacion:Educacion[] = [];
  isLogged = false;
  idEducacion!: number;


  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('del') del!: ElementRef;
  @ViewChild('card') card!: ElementRef;


  ngOnInit(): void{
    this.cargarEdu();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    }

  cargarEdu(): void{
    this.sEdu.lista().subscribe(data => {this.educacion = data;})
  }
  showModifiEmpresa(modifi: HTMLElement) {
    modifi.style.display = 'flex';
  }

  showModifiDesc(modifiDesc: HTMLElement) {
    modifiDesc.style.display = 'flex';
  }

  editInstituto(id: HTMLElement, edit: HTMLInputElement) {
    let nuevaEmpresa = edit.value;
    let idEducacion = this.idEducacion = parseInt(id.innerText);
    this.sEdu
      .editarInstituto(idEducacion, nuevaEmpresa)
      .subscribe(() => {
        console.log('Empresa actualizada correctamente');
      });
  }

  cerrarInputEmpresa(modifi: HTMLElement) {
    modifi.style.display = 'none';
  }

  cerrarInputDescripcion(modifiDesc: HTMLElement) {
    modifiDesc.style.display = 'none';
  }

  deleteexp(id: HTMLElement) {
    const iddelete = parseInt(id.innerText);
    this.sEdu.delete(iddelete).subscribe(() => {
      console.log('Experiencia eliminada correctamente');
    });
  }
  
  reloadPage() {
    location.reload();
  }

  editDescr(id: HTMLElement, editDesc: HTMLInputElement) {
    let nuevaDesc = editDesc.value;
    let idEducacion = this.idEducacion = parseInt(id.innerText);
    this.sEdu.editarDesc(idEducacion, nuevaDesc).subscribe(() => {
      console.log('Descripción actualizada correctamente');
    });
  }
  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }
}

