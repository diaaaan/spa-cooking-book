import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { ContentComponent } from './components/content/content.component';
import { AddComponent } from './posts/add/add.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'content', component: ContentComponent },
  { path: 'add-post', component: AddComponent },
  { path: '**', redirectTo: 'content', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
