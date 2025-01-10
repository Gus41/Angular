import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../task/dummy-tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(taskService: TasksService){
    this.tasksService = taskService;
  }
  private tasksService: TasksService;

  @Input() name? : string;
  @Input({required:true}) userId! : string;
  tasks = DUMMY_TASKS;



  appendTask(taskData:{title:string, summary: string, dueDate:string}){
    this.tasks.push({
      title: taskData.title,
      summary: taskData.summary,
      id: new Date().getTime().toString(),
      dueDate : taskData.dueDate,
      userId: this.userId
    })
    this.toggleModal()
  }

  get userTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(taskId: string){
    this.tasksService.deleteTask(taskId)
  }
  showModal = false
  toggleModal(){
    this.showModal = !this.showModal
  }

}
