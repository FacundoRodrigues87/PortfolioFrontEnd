import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpComponent } from './components/exp/exp.component';
import { EduComponent } from './components/edu/edu.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarInputDirective } from './mostrar-input.directive';
import { ExpitemComponent } from './components/expitem/expitem.component';
import { EduitemComponent } from './components/eduitem/eduitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExpComponent,
    EduComponent,
    SkillComponent,
    ProyectComponent,
    MostrarInputDirective,
    ExpitemComponent,
    EduitemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
