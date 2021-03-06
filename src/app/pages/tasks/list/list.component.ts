import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // use observable created in tasks service
  tasks$ = this.tasksSvc.tasks;
  pendingTasks;
  taskDuration: any = ['corta', 'media', 'larga'];
  filterValue = '';

  navigationExtras: NavigationExtras = {
    state: {
      value: null

    }
  }
  constructor(private router: Router, private tasksSvc: TasksService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPendingTasks()
    console.log(this.pendingTasks);
    
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  onGoToDetails(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }

  async onDelete(taskId: string): Promise<void>{
    try {
      await this.tasksSvc.onDeleteTask(taskId)
    } catch(err) {
      console.log(err); 
    }
  }

  getPendingTasks() {
    this.pendingTasks = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.completed === false))
    )
  }

  listForm = this.fb.group({
    duration: ['']
  })

  changeDuration(e) {
    this.listForm.get('duration').setValue(e.target.value, {
      onlySelf: true
    })
    this.filterValue = this.listForm.value.duration
    console.log(this.filterValue);
  }

  cleanFilter(): void {
    this.filterValue = '';
  }

}
