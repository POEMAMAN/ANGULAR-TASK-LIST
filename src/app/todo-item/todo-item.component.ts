import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: { text: string; completed: boolean } = { text: '', completed: false };
  @Output() remove = new EventEmitter<void>();
}
