import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  task1: ITask = {
    title: 'Tarea 1',
    description: 'Esta es la descripcion 1',
    completed: true,
    level: Levels.Info,
  };
  task2: ITask = {
    title: 'Tarea 2',
    description: 'Esta es la descripcion 2',
    completed: true,
    level: Levels.Urgent,
  };

  deleteTask(task: ITask) {
    alert('Se va a eliminar la tarea: ' + task.title);
  }
}
