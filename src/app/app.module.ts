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
import {BarsComponent } from './components/bars/bars.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { ProyectItemComponent } from './components/ProyectItem/ProyectItem.component';


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
    BarsComponent,
    LoginComponent,
    PortfolioComponent,
    ProyectItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
