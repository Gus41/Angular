import { DUMMY_TASKS } from "../task/dummy-tasks";

export class TasksService {
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
       
    }

    deleteTask(taskId: string){
        this.tasks = this.tasks.filter((task)=> task.id != taskId )
      }

}