import { Component, OnInit } from '@angular/core';
import { ServicesService } from "./services/services.service";
import { AuthService, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user: any;

  loginbtn: boolean;
  logoutbtn: boolean;
  title = 'cooking-book-project';

  constructor(private dataService: ServicesService,
    private _socioAuthServ: AuthService) {

    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    console.log("loggedin");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
    }
    
    }
    
    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
    }
    logout()
    {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    }

    ngOnInit() {
      this._socioAuthServ.authState.subscribe((user) => {
        this.user = user;
      });
    }
}
