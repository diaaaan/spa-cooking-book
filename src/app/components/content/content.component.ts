import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ApiResponse } from '../../Model/api-response';
import { Router } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { AuthService, GoogleLoginProvider } from "angularx-social-login";



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts: any;
  user: any;
  private loggedIn: boolean;

  constructor(  private apiService:  ServicesService,
                private router: Router,
                private _socioAuthServ: AuthService) { }

  ngOnInit() {

    this._socioAuthServ.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.apiService.getPosts()
      .subscribe( (data: any) => {
        this.posts = data;
        console.log(this.posts);
      });
  }

  deletePost(post: Post): void {
    this.apiService.deletePost(post.postid)
      .subscribe( data => {
        
        console.log(this);
        this.posts = this.posts.filter(u => u!==post);
      });
  }

  showPost(post:Post):void {
    this.router.navigate(['info/' + post.postid]);
  }


  // test = this.user.getId();
  // onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }


}
