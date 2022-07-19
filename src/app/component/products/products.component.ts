import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  tasks: Task[]= [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService
          .getTasks()
          .subscribe((tasks) =>(
            this.tasks=tasks
          ));
  }

  deleteTask(tasks:Task){
    this.taskService
      .deleteTask(tasks)
      .subscribe(()=>(
        this.tasks = this.tasks.filter(t=> t.id !==tasks.id)
      ));
    }
  
  onToggleReminder(task: Task){
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService
          .updateTaskReminder(task)
          .subscribe()
  }

  addTask(task: Task){
    this.taskService
        .addTask(task)
        .subscribe((task) => (this.tasks.push(task)))
  }

}
