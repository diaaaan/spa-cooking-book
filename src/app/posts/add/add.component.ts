import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: any;
  auth_name:any;

  


  constructor(private formBuilder: FormBuilder,
              private apiService: ServicesService,
              private router: Router,
              private _socioAuthServ: AuthService) { }

  addForm: FormGroup;

  ngOnInit() {

    this._socioAuthServ.authState.subscribe((user) => {
      this.user = user;
      this.auth_name = this.user.name;
      console.log("Name: ", this.auth_name);


    


    this.addForm = this.formBuilder.group ({
      postid: [],
      recipeName: ['', Validators.required],
      instruction: ['', Validators.required],
      time: ['', Validators.required],
      auth_name: [this.auth_name]
    });
  });

  }

  onSubmit() {
    this.apiService.createPost(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['content']);
      });
  }
}
