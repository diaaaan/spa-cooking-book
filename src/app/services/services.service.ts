import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "../Model/post";
import { ApiResponse } from '../Model/api-response';
import { map } from "rxjs/operators";
import { Users } from '../Model/users';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  redirectUrl: string;

  

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/RecipeDb/';

  public userlogin(username, password) {
    alert(username)
    return this.http.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
      }));
  }

  public userregistration(name, email, pwd) {
    return this.http.post<any>(this.baseUrl + '/register.php', { name, email, pwd })
      .pipe(map(Users => {
        return Users;
      }));
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }




  // createUser(user: User): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(this.baseUrl + '/register.php', user);
  // }

  // login(loginData): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
  // }

  createPost(post: Post): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', post);
  }

  getPostById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/getById.php?id=' + id);
  }

  getPosts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }
  
  deletePost(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/delete.php?id=' + id);
  }

}
