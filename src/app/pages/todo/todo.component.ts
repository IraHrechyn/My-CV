import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {ListComponent} from "./components/list/list.component";
import {TodoService} from "./services/todo-service";
import {AppNavbarComponent} from "../home/components/app-navbar/app-navbar.component";


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    HeaderComponent,
    ListComponent,
    AppNavbarComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.initTodos();
  }
}
