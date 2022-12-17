import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

declare function changeBg():any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor (private datosportfolio:DataService) {  }
  ngOnInit():void {
    changeBg();
  }
}

