import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {faTrashAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {map} from "rxjs/operators";

export interface Todo {
  id?: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.less']
})
export class HttpClientComponent implements OnInit {
  URL = 'https://jsonplaceholder.typicode.com/todos';
  limit = 2;
  todos: Todo[] = [];
  delIcon = faTrashAlt;
  checkIcon = faCheck;
  loading: boolean = false;

  todoTitle: string = '';
  @ViewChild('titleInputRef', {static: false}) titleRef?: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodos: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.http.post<Todo>(this.URL, newTodos)
      .subscribe((todo) => {
        this.todos.unshift(todo);
        this.todoTitle = '';
        this.titleRef?.nativeElement.focus();
      });
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>(`${this.URL}?_limit=${this.limit}`)
      .pipe(
        map(todos => {
          const arr = todos.reduce((acc, item) => {
            if (item.completed) {
              acc[0].push(item);
            } else {
              acc[1].push(item);
            }
            return acc;
          }, ([[],[]] as [Todo[], Todo[]]));
          return [...arr[1], ...arr[0]]
        }),
        // delay(1000)
      )
      .subscribe((todos) => {
        this.todos = todos;
        this.loading = false;
      })
  }

  removeTodo(id: number) {
    this.http.delete<void>(`${this.URL}/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }
}
