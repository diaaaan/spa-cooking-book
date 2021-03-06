import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegComponent } from './components/auth/reg/reg.component';
import { ContentComponent } from './components/content/content.component';
import { AddComponent } from './posts/add/add.component';
import { InfoComponent } from './posts/info/info.component';
import { UserComponent } from './profile/user/user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'content', component: ContentComponent },
  { path: 'add-post', component: AddComponent },
  { path: 'profile', component: UserComponent },
  { path: 'info/:postid', component: InfoComponent },
  { path: '**', redirectTo: 'content', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
