import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  posts: Post[] = []
  constructor(private reddit: RedditService){}
  ngOnInit(): void {
   this.reddit.getRedditPosts().subscribe(childrenData => this.posts = childrenData)
  }
}
