import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  //TODO Reformular como una lista de tareas

  deleteTask() {
    this.delete.emit(this.task); //Notificamos al componente superior la tarea a eliminar
  }
}
