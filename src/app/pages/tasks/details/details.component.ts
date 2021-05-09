import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Task } from 'src/app/shared/models/task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  task: Task;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router, private tasksSvc: TasksService) {
    const navigation = this.router.getCurrentNavigation();
    this.task = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    // if (typeof this.task === 'undefined') {
    //   this.router.navigate(['list']);
    // }
  }

  onGoToEdit(): void{
    this.navigationExtras.state.value = this.task;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  onGoBackToList():void{
    this.router.navigate(['list'])
  }

  async onDelete(): Promise<void>{
    try {
      await this.tasksSvc.onDeleteTask(this.task?.id);
      alert('Delete')
      this.onGoBackToList();
    } catch(err) {
      console.log(err);
    }
  }

  onStart(): void{
    alert('Starting')
    this.task['open'] = true;
    this.tasksSvc.onSaveTask(this.task, this.task.id);
  }


  onFinish(): void{
    alert('Finished')
    this.task['completed'] = true;
    this.task.finishDate = new Date().toLocaleString();
    this.tasksSvc.onSaveTask(this.task, this.task.id );
  }

}
