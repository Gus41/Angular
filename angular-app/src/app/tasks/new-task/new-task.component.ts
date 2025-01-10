import { Component, EventEmitter, Output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter()
  @Output() add = new EventEmitter<{title:string, summary:string, dueDate: string}>()

  title = '';
  sumarry = '';
  dueDate = '';

  handleSubmit(){
   this.add.emit(
    {
      title: this.title,
      summary: this.sumarry,
      dueDate: this.dueDate
    }
   )
  }
  
  toggleModal(){
    this.cancel.emit()
  }
}
