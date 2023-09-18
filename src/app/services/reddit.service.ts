import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditPosts(){
    return this.http.get<Post>('https://www.reddit.com/r/italy/new.json').pipe(
      // tap(redditObj => console.log(redditObj)),
      map((redditObj:any) => redditObj.data),
      // tap(redditData => console.log(redditData)),
      map(redditData => redditData.children),
      // tap(redditChildren => console.log('children', redditChildren)),
      map(redditChildren => redditChildren.map((child: any) => child.data))
      );
  }

}
