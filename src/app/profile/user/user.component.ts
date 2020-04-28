import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private router: Router,
              private _socioAuthServ:AuthService ) { }


  
  signOut(): void {
    this._socioAuthServ.signOut();

    console.log("User signed out");
    this.router.navigate(['content']);
}

  ngOnInit(): void {
    this._socioAuthServ.authState.subscribe((user) => {
      this.user = user;
      
    });
  }

}
