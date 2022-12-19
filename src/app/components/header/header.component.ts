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

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }
}
