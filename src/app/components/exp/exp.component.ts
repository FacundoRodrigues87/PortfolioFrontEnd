import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare function hola(): any;

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent {
  constructor(private renderer: Renderer2) {}

  @ViewChild('modifi') modifi!: ElementRef;

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }
}
