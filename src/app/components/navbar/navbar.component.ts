import { Component } from '@angular/core';

declare function changeBg():any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor () {  }
  ngOnInit():void {
    changeBg();
  }
}

