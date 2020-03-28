import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from "rxjs/operators";
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  angForm: FormGroup;


  constructor(private fb: FormBuilder,
              private apiService: ServicesService,
              private router: Router
  
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
