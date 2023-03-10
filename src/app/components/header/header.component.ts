import { ThisReceiver } from '@angular/compiler';
import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
