import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: 'Home',component:HomeComponent},
  {path: '',redirectTo:'Home',pathMatch:'full'},
  {path:'blog',component:BlogComponent}, 
  {path:'contact-us',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
