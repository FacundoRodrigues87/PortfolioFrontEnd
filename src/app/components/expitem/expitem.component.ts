import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { ExpComponent } from '../exp/exp.component';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-expitem',
  templateUrl: './expitem.component.html',
  styleUrls: ['./expitem.component.css'],
})
export class ExpitemComponent {
  title = 'Entre Diosas y Reinas';


  constructor(private renderer: Renderer2, private sExp:SExperienciaService, private tokenService: TokenService) {}
  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('del') del!: ElementRef;
  @ViewChild('card') card!: ElementRef;
  @ViewChild('id') id!: ElementRef;
  @ViewChild('modifiDesc') modifiDesc!: ElementRef;
  @ViewChild('editDesc') editDesc!: ElementRef;
  experiencia:Experiencia[] = [];
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    }


    idExperiencia!: number;
    nuevaEmpresa!: string;


  cargarExp(): void{
    this.sExp.lista().subscribe(data => {this.experiencia = data;})
  }



  showModifiEmpresa(modifi: HTMLElement) {
    modifi.style.display = 'flex';
  }

  showModifiDesc(modifiDesc: HTMLElement) {
    modifiDesc.style.display = 'flex';
  }

  editEmpresa(id: HTMLElement, edit: HTMLInputElement) {
    let nuevaEmpresa = edit.value;
    let idExperiencia = this.idExperiencia = parseInt(id.innerText);
    this.sExp
      .editarEmpresa(idExperiencia, nuevaEmpresa)
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
    this.sExp.delete(iddelete).subscribe(() => {
      console.log('Experiencia eliminada correctamente');
    });;
  }
  reloadPage() {
    location.reload();
  }

  editDescripcion(id: HTMLElement, editDesc: HTMLInputElement) {
    let nuevaDesc = editDesc.value;
    let idExperiencia = this.idExperiencia = parseInt(id.innerText);
    this.sExp.editarDescripcion(idExperiencia, nuevaDesc).subscribe(() => {
      console.log('Descripción actualizada correctamente');
    });
  }

  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }
}
