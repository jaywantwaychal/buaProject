import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:"**", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
