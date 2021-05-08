import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  tasks$ = this.tasksSvc.tasks;
  completedTasks

  navigationExtras: NavigationExtras = {
    state: {
      task: null
    }
  }

  constructor( private router: Router, private tasksSvc: TasksService) { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  onGoToDetails(item: any): void{
    this.navigationExtras.state.task = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  getCompletedTasks(): void {
    this.completedTasks = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.completed === true))
    );
  }

}
