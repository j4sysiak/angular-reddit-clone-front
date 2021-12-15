import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Post} from './post.model';

@Component({
  selector: 'app-assignment-solution-sekcja18-http',
  templateUrl: './assignment-solution-sekcja18-http.component.html',
  styleUrls: ['./assignment-solution-sekcja18-http.component.css']
})
export class AssignmentSolutionSekcja18HttpComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    this.http.post<{ name: string }>('https://ng4-complete-guide-13-12-2021-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        // console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get<{ [key: string]: Post }>('https://ng4-complete-guide-13-12-2021-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        console.log(posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }

}
