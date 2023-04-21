import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-cssbar',
  templateUrl: './cssbar.component.html',
  styleUrls: ['./cssbar.component.css'],
})
export class CssbarComponent {
  constructor(private renderer: Renderer2) {}
  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }

  changeContent() {
    let nuevo = this.edit.nativeElement.value + '%';
    let viejo = this.reemplazable.nativeElement;
    this.renderer.setStyle(viejo, 'width', nuevo);
  }

  cerrarInput() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'none');
  }
}
