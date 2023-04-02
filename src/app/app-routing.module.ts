import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
