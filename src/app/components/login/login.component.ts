import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: ServicesService) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators. required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.login(loginData)
    .subscribe((data: any) => {
      this.message = data.message;

      if (data.token) {
        // window.localStorage.setItem('token', data.token);
        this.router.navigate(['content']);

      } else {
        this.invalidLogin = true;
        // alert(data.message);
      }
    });
  }
  }
