import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri: string = 'http://localhost:5000';
  constructor(
    private http: HttpClient
  ) {
    console.log(`auth service injected..!`);
  }

  //Get all of the posts...................
  getPosts() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.uri}/api/posts`, { headers: headers });
  }

  //Add some post.........................
  addPost(post) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/api/post/add`, post, { headers: headers });
  }

  //View post............................
  viewPost(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.uri}/api/post/${id}`, { headers: headers });
  }

  //Patch post................................
  patchPost(id, post) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.patch(`${this.uri}/api/post/patch/${id}`, post, { headers: headers });
  }

  //Delete some post...........................
  deletePost(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.uri}/api/post/${id}`, { headers: headers });
  }
}
