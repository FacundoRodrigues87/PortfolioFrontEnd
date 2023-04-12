import { ThisReceiver } from '@angular/compiler';
import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuario: usuario = new usuario("", "", "", "");
  constructor(private renderer: Renderer2, public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe(data => {this.usuario = data})
  }


  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }

  changeContent() {
    let nuevo:string = (this.edit.nativeElement.value);
    let viejo:string = (this.reemplazable.nativeElement.innerText);
    this.reemplazable.nativeElement.innerText = nuevo;
  }

  cerrarInput(){
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'none');
  }

}
