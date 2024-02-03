import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: { text: string; completed: boolean }[] = [
    { text: 'Tirar la basura', completed: false },
    { text: 'Estudiar Angular', completed: false },
    { text: 'Repasar Javascript', completed: true }
  ];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}

