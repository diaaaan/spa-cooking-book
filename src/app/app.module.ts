import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AddComponent } from './posts/add/add.component';
import { ViewComponent } from './posts/view/view.component';
import { EditComponent } from './posts/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ContentComponent,
    LoginComponent,
    RegComponent,
    AdminpanelComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
