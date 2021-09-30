import {Component} from '@angular/core';
import {Post} from "./card/card.component";
import {Field, IFilter} from "./post-filter/post-filter.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Заголовок 1', body: "ipsum dolor sit amet, consectetur adipisicing elit. Eum, imped"},
    {title: 'Заголовок 2', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, "},
    {title: 'Заголовок 3', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, "},
    {title: 'Заголовок 4', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,"},
  ]

  isShow = true;
  query: string = '';
  field: Field = 'no_filter';

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolve!')
    }, 2000)
  })

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000);
  })
  appState: string = 'on';


  addPost(post: Post) {
    this.posts.unshift(post)
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(p => p !== post);
  }

  filterPost(filter: IFilter) {
    this.query = filter.query;
    this.field = filter.field;
  }
}
