import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    favourites: Post[] = []

    constructor() {
      if (localStorage.getItem('favourites')) {
        this.favourites = JSON.parse(localStorage.getItem('favourites')!)
      }
    }

    savePost(post: Post){
      this.favourites.push(post);
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    }

    removePost(post: Post){
      this.favourites = this.favourites.filter(p => p.id !== post.id)
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    }

    toggleFavourite(post: Post){
      if (this.isFavourite(post)) {
        this.removePost(post)
      } else {
        this.savePost(post)
      }
    }

  isFavourite(post: Post):boolean {
    return this.favourites.some(p => p.id === post.id)
  }
}
