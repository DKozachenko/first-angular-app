import { Component } from '@angular/core';

export interface ITask {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';

  tasks: ITask[] = [
    {title: 'bread', complete: true},
    { title: 'milk', complete: false },
    { title: 'eggs', complete: false },
  ]

  add(el: any) {
    this.tasks.push({
      title: el.value,
      complete: false
    })
  }
}
