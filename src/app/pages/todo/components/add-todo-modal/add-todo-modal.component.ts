import { Component } from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {TodoService} from "../../services/todo-service";
import {MessageService} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {TagModule} from "primeng/tag";
import {ButtonDirective} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {Ripple} from "primeng/ripple";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-todo-modal',
  standalone: true,
  imports: [
    DialogModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonDirective,
    ConfirmDialogModule,
    TagModule,
    Ripple,
    CommonModule
  ],
  templateUrl: './add-todo-modal.component.html',
  styleUrl: './add-todo-modal.component.css'
})
export class AddTodoModalComponent {
  constructor(
    public todoService: TodoService,
    private readonly messageService: MessageService
  ) {}

  cancel() {
    this.todoService.clearTodoForCreation();
    this.todoService.m.showModal = false;
  }

  save() {
    console.log('Status:', this.todoService.m.newTodo!.status);
    console.log('Severity:', this.todoService.getSeverity(this.todoService.m.newTodo!.status));
    this.todoService.addTodo();
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Task Created',
      life: 3000
    });
  }
}
