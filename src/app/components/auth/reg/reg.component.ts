import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from "rxjs/operators";
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  user: any;

  angForm: FormGroup;


  constructor(private fb: FormBuilder,
              private apiService: ServicesService,
              private router: Router,
              private _socioAuthServ:AuthService
  
  ) { 
      this.angForm = this.fb.group({
      email: ['', [Validators.required,
                  Validators.minLength(1), 
                  Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required]
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


  ngOnInit() {}

  postdata(angForm1) {
    this.apiService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
      .pipe(first())
        .subscribe(
          data => {
            console.log("Succ");
            this.router.navigate(['login']);
    },
    error => {
    });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }

}
