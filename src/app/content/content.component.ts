import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ApiResponse } from '../Model/api-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts: any;

  constructor(private apiService:  ServicesService) { }

  ngOnInit() {
    this.apiService.getPosts()
      .subscribe( (data: any) => {
        this.posts = data;
        console.log(this.posts);
      });
  }

}
