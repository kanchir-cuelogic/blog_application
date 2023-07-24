import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, Comment, User } from './app.interface';

@Injectable()
export class AppService {
  url: string = `http://localhost:8080`;
  constructor(private http: HttpClient) { }

  // Posts enpoints
  getPosts() {
    return this.http.get(`${this.url}/Blog/getAllBlogList`);
  }

  postBlog(newBlog: Blog){
    return this.http.post(`${this.url}/Blog/createBlog`, { blog: newBlog });
  }

  //comments endpoints
  createComment(newComment: Comment){
    return this.http.post(`${this.url}/Comment/createComment`, { comment: newComment });
  }

  getComments(blogId: number){
    return this.http.get(`${this.url}/Comment/getAllCommentList/${blogId}`);
  }

  // User endpoints
  createUser(newUser: User) {
    return this.http.post(`${this.url}/User/createUser`, { user: newUser });
  }

  validateUser(username: string, password: string) {
    return this.http.get(`${this.url}/User/validateUserByNameAndPassword?userName=${username}&Password=${password}`);
  }
}