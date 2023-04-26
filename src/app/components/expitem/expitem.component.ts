import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
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
  experiencia:Experiencia[] = [];
  title = 'Entre Diosas y Reinas';

  constructor(private renderer: Renderer2, private sExp:SExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

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

  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('del') del!: ElementRef;
  @ViewChild('card') card!: ElementRef;
  @ViewChild('id') id!: ElementRef;

  showModifi(modifi: HTMLElement) {
    modifi.style.display = 'flex';
  }

  onSubmit(id: HTMLElement, edit: HTMLInputElement) {
    let nuevaEmpresa = edit.value;
    let idExperiencia = this.idExperiencia = parseInt(id.innerText);
    this.sExp
      .editarEmpresa(idExperiencia, nuevaEmpresa)
      .subscribe(() => {
        console.log('Descripción "acerca de" actualizada correctamente');
      });
  }

  cerrarInput(modifi: HTMLElement) {
    modifi.style.display = 'none';
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



}
