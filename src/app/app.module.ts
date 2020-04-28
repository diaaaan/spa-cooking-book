import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegComponent } from './components/auth/reg/reg.component';
import { AddComponent } from './posts/add/add.component';
import { EditComponent } from './posts/edit/edit.component';
import { InfoComponent } from './posts/info/info.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";
import { UserComponent } from './profile/user/user.component';
import { JoinusComponent } from './joinus/joinus.component';

const google_oauth_client_id:string = "79994110272-ausqe9a5v3m7a0tt3vn1euntg2srckts.apps.googleusercontent.com";

let config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    LoginComponent,
    RegComponent,
    AddComponent,
    EditComponent,
    InfoComponent,
    UserComponent,
    JoinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule.initialize(config)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
