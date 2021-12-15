import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Post} from './post.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-assignment-solution-sekcja18-http',
  templateUrl: './assignment-solution-sekcja18-http.component.html',
  styleUrls: ['./assignment-solution-sekcja18-http.component.css']
})
export class AssignmentSolutionSekcja18HttpComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

}
