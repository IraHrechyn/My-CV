import { Component } from '@angular/core';
import {TodoService} from "../../services/todo-service";
import {FormsModule} from "@angular/forms";
import {ButtonDirective} from "primeng/button";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {Ripple} from "primeng/ripple";
import {CommonModule} from "@angular/common";
import {AddTodoModalComponent} from "../add-todo-modal/add-todo-modal.component";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-header-todo',
  standalone: true,
  imports: [
    FormsModule,
    ButtonDirective,
    ConfirmPopupModule,
    Ripple,
    CommonModule,
    AddTodoModalComponent,
    InputTextModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public readonly todoService: TodoService) {}
}
