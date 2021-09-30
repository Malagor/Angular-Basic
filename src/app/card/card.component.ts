import {Component, EventEmitter, Input, Output} from '@angular/core';

export class Post {
  public title: string;
  public body: string;

  constructor(title = "", body = '') {
    this.title = title;
    this.body = body;
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() post: Post = {} as Post;
  @Output() deletePost = new EventEmitter<Post>();

  delete() {
    this.deletePost.emit(this.post);
  }
}
