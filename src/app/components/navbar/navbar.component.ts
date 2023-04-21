import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

declare function changeBg(): any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) {}
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
    changeBg();
  }

  onLogOut(): void {
    this.tokenService.logOut();
    location.reload();
  }
}
