import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-assignment-solution-sekcja18-http',
  templateUrl: './assignment-solution-sekcja18-http.component.html',
  styleUrls: ['./assignment-solution-sekcja18-http.component.css']
})
export class AssignmentSolutionSekcja18HttpComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    this.http.post('https://ng4-complete-guide-13-12-2021-default-rtdb.firebaseio.com/posts.json', postData);
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

}
