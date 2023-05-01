import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  usuario: usuario = new usuario('', '', '', '', [], [], []);

  idUsuario: number = 1;

  constructor(
    private renderer: Renderer2,
    public usuarioService: UsuarioService,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.usuarioService.getUser().subscribe((data) => {
      this.usuario = data;
    });
    this.usuarioService.getUsers().subscribe((usuarios: any) => {
      console.log(usuarios);
    });
  }

  URL = this.usuarioService.URL;

  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;

  reloadPage() {
    location.reload();
  }

  mostrarAdmin():void {

  }

  showModifi() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'flex');
  }

  onSubmit() {
    let nuevoAcercade = this.edit.nativeElement.value;
    this.usuarioService
      .editarAcercaDe(this.idUsuario, nuevoAcercade)
      .subscribe(() => {
        console.log('Descripción "acerca de" actualizada correctamente');
      });
  }

  cerrarInput() {
    this.renderer.setStyle(this.modifi.nativeElement, 'display', 'none');
  }

  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }
}
