import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../card/card.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  @Output() addCard = new EventEmitter<Post>()
  @ViewChild('titleInputRef', {static: false}) titleRef?: ElementRef;

  public title: string = '';
  public body: string = '';
  public message: string = '';

  submit() {
    if (this.title.trim() && this.body.trim()) {
      const post = new Post(this.title, this.body);
      this.addCard.emit(post);
      this.clearInputs();
      this.focusTitle();
    }
  }

  clearInputs() {
    this.title = '';
    this.body = '';
  }

  changeInputs() {
    if (!this.title.trim() || !this.body.trim()) {
      this.message = 'Заголовок и описание не должны быть пустыми';
    } else {
      this.message = '';
    }
  }

  focusTitle() {
    this.titleRef?.nativeElement.focus();
  }

}
