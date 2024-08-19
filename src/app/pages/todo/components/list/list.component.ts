import { Component } from '@angular/core';
import {TodoService} from "../../services/todo-service";
import {TodoData} from "../../types/todo-data.interface";
import {TaskStatus} from "../../types/status.enum";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {TagModule} from "primeng/tag";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule,
    TagModule,
    ButtonDirective,
    Ripple,
    DropdownModule,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  readonly TaskStatus = TaskStatus;
  constructor(public todoService: TodoService) {}

  onRowEditInit(todo: TodoData): void {
    this.todoService.m.editedTodos[todo.id] = {...todo};
  }

  onRowEditCancel(todo:TodoData): void {
    this.todoService.m.todos = this.todoService.m.todos.map(item => item.id === todo.id ? this.todoService.m.editedTodos[todo.id]: item);
    delete this.todoService.m.editedTodos[todo.id];
  }

  onRowEditSave(todo:TodoData) {
    this.todoService.m.todos = this.todoService.m.todos.map(item => item.id === todo.id ? todo : item);
    delete this.todoService.m.editedTodos[todo.id];
    this.todoService.saveToLocalStorage();
  }
}
