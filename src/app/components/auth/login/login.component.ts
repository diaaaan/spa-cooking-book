import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private apiService: ServicesService) {
                this.angForm = this.fb.group({
                  email: ['', [Validators.required, 
                               Validators.minLength(1),
                               Validators.email]],
                  password: ['', Validators.required]
                });
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