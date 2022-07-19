import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() task?: Task;
  faTimes = faTimes;
  
  @Output() onDeleteTask : EventEmitter<Task>= new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>= new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  onDelete(task: Task){
    //console.log("deleted")
    this.onDeleteTask.emit(task)
  }

  taskToggle(task: Task){
    this.onToggleReminder.emit(task)
  }
}

