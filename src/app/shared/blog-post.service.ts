import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPostPayload} from '../blog-post/create-blog-post/blog-post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient: HttpClient) { }

  addBlogPost(blogPostPayload: BlogPostPayload){
    return this.httpClient.post('http://localhost:8080/api/blog/blogposts/', blogPostPayload);
  }

  getAllBlogPosts(): Observable<Array<BlogPostPayload>>{
    return this.httpClient.get<Array<BlogPostPayload>>("http://localhost:8080/api/blog/blogposts/all");
  }

  getBlogPost(permaLink: Number):Observable<BlogPostPayload>{
    return this.httpClient.get<BlogPostPayload>('http://localhost:8080/api/blog/blogposts/get/' + permaLink);
  }
}
