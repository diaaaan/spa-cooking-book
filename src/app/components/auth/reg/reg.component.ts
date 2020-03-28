import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private apiService: ServicesService,
              private router: Router
  
  ) { }

  regForm: FormGroup;

  ngOnInit() {
    this.regForm = this.formBuilder.group ({
      id: [],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onReg(){
    console.log(this.regForm.value);
    this.apiService.createUser(this.regForm.value)
      .subscribe( data => {
        this.router.navigate(['content']);
      });
  }

}
