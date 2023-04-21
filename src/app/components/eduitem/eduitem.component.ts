import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-eduitem',
  templateUrl: './eduitem.component.html',
  styleUrls: ['./eduitem.component.css'],
})
export class EduitemComponent {
  constructor(private renderer: Renderer2) {}

  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('del') del!: ElementRef;
  @ViewChild('card') card!: ElementRef;

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }

  changeContent() {
    let nuevo: string = this.edit.nativeElement.value;
    let viejo: string = this.reemplazable.nativeElement.innerText;
    this.reemplazable.nativeElement.innerText = nuevo;
  }

  cerrarInput() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'none');
  }

  deleteCard() {
    this.renderer.setStyle(this.card.nativeElement, 'display', 'none');
  }
}
