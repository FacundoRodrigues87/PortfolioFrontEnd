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
import { ExpitemComponent } from './components/expitem/expitem.component';
import { EduitemComponent } from './components/eduitem/eduitem.component';
import { CssbarComponent } from './components/bars/cssbar/cssbar.component';
import { HtmlbarComponent } from './components/bars/htmlbar/htmlbar.component';
import { JsbarComponent } from './components/bars/jsbar/jsbar.component';
import { ComubarComponent } from './components/bars/comubar/comubar.component';
import { LiderbarComponent } from './components/bars/liderbar/liderbar.component';
import { TeambarComponent } from './components/bars/teambar/teambar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExpComponent,
    EduComponent,
    SkillComponent,
    ProyectComponent,
    ExpitemComponent,
    EduitemComponent,
    CssbarComponent,
    HtmlbarComponent,
    JsbarComponent,
    ComubarComponent,
    LiderbarComponent,
    TeambarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
