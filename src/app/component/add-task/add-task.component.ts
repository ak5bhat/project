import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Tasks';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  name: string = "";
  star: number = 0;
  reminder: boolean = false;
  showAddTask?: boolean;

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.name){
      alert('pls add a task');
      return;
    }

    const newTask = {
      name: this.name,
      star: this.star,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.name = '';
    this.star = 0;
    this.reminder = false;

  }

}