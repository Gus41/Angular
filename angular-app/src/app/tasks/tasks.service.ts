import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../task/dummy-tasks";

@Injectable({providedIn: 'root'})
export class TasksService {


    constructor(){
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            this.tasks = JSON.parse(tasks)
        }
    }
    private tasks = DUMMY_TASKS;


    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId == userId);
    }

    addTask(taskData: { title: string, summary: string, dueDate: string }, userId: string) {
        this.tasks.push({
            title: taskData.title,
            summary: taskData.summary,
            id: new Date().getTime().toString(),
            dueDate: taskData.dueDate,
            userId: userId
        })
        this.saveTasks()
       
    }

    deleteTask(taskId: string){
        this.tasks = this.tasks.filter((task)=> task.id != taskId )
        this.saveTasks()
      }


    private saveTasks(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks))
    }
}