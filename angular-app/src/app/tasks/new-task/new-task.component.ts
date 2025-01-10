import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {


  private taskService = inject(TasksService)

  @Input({required: true}) userId!: string
  @Output() cancel = new EventEmitter()
  @Output() add = new EventEmitter<{title:string, summary:string, dueDate: string}>()

  title = '';
  sumarry = '';
  dueDate = '';

  handleSubmit(){
   this.taskService.addTask(
    {
      title: this.title,
      summary: this.sumarry,
      dueDate: this.dueDate
    },
    this.userId
   )
  }
  
  toggleModal(){
    this.cancel.emit()
  }
}
