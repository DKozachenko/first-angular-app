import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() item: any;
  @Input() ind: any; 
  @Input() tasks: any; 

  constructor() { }

  ngOnInit(): void {
  }

  add(el: any) {
    this.tasks.push({
      title: el.value,
      complete: false
    })
  }

  toggle(task: ITask) {
    task.complete = !task.complete
  }

  remove(ind: number) {
    this.tasks.splice(ind, 1)
  }

}
