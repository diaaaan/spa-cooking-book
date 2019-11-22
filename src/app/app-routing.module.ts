import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ContentComponent } from './content/content.component';
import { AdminpanelComponent} from  './adminpanel/adminpanel.component';
import { AddComponent } from './posts/add/add.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegComponent },
  { path: 'content', component: ContentComponent },
  { path: 'admin', component: AdminpanelComponent },
  { path: 'add-post', component: AddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
