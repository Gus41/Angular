import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn:'root'
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private logService = inject(LoggingService)

    allTask = this.tasks.asReadonly()

    addTask(TaskData: { title: string, description: string }) {
        this.tasks.update((oldTasks) => {

            const newTask: Task = {
                ...TaskData,
                id: Math.random().toString(),
                status: 'OPEN'
            }
            this.logService.log(`Added new task: ${newTask.title}`)
            return [...oldTasks, newTask]
        })
    }
    
    updateTasksStatus(TaskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => {
            return oldTasks.map(t => {

                if (t.id == TaskId) {
                    return { ...t, status: newStatus } 
                }

                return t;
            })

        })
        this.logService.log(`Updated task status: ${newStatus} - ID: ${TaskId}`)
    }

}