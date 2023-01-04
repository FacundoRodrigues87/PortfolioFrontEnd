import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-expitem',
  templateUrl: './expitem.component.html',
  styleUrls: ['./expitem.component.css'] 
})
export class ExpitemComponent {

  title = 'Entre Diosas y Reinas';

  constructor(private renderer: Renderer2) { }

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
