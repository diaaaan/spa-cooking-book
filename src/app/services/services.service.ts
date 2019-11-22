import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "../Model/post";
import { ApiResponse } from '../Model/api-response';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/RecipeDb/';


  createPost(post: Post): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', post);
  }

  getPostById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/getById.php?id=' + id);
  }

  getPosts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }
  
}
