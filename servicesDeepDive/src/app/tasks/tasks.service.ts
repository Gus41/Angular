import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";


@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = signal<Task[]>([]);

    allTask = this.tasks.asReadonly()

    addTask(TaskData: { title: string, description: string }) {
        this.tasks.update((oldTasks) => {

            const newTask: Task = {
                ...TaskData,
                id: Math.random().toString(),
                status: 'OPEN'
            }
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
    }

}