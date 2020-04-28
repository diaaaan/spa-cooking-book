import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;


  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private apiService: ServicesService,
              private _socioAuthServ:AuthService) {
                this.angForm = this.fb.group({
                  email: ['', [Validators.required, 
                               Validators.minLength(1),
                               Validators.email]],
                  password: ['', Validators.required]
                });
               }

  signIn(platfom: string): void 
    {
      platfom = GoogleLoginProvider.PROVIDER_ID;
             
        this._socioAuthServ.signIn(platfom).then((response)=>{
          console.log(platfom  + "logged in user data is=", response);
             
          this.user = response;

          this.router.navigate(['/content']);
        }
      );
    }

  ngOnInit() { }

  postdata(angForm1) {
    this.apiService.userlogin(angForm1.value.email,angForm1.value.password)
      .pipe(first())
        .subscribe(
          data => {
            const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/content';
            this.router.navigate([redirect]);
          },
          error => {
            alert("Неправильные имя пользователя или пароль!")
            });
          }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
}