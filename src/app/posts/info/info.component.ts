import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Model/post'; 

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private apiService:  ServicesService,
              private formBuilder: FormBuilder,
              private router: Router,
              private routes: ActivatedRoute

  ) { }

  addForm: FormGroup;

  ngOnInit() {

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.postid);

    this.addForm = this.formBuilder.group ({
      postid: [],
      recipeName: ['', Validators.required],
      instruction: ['', Validators.required],
      time: ['', Validators.required]
    });

    this.apiService.getPostById(routeParams.postid).subscribe((data: any) => {
      this.addForm.patchValue(data);
    });
  }

}
