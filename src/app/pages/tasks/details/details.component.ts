import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Task } from 'src/app/shared/models/task.interface';

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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.task = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.task === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  onGoToEdit(): void{
    this.navigationExtras.state.value = this.task;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  onGoBackToList():void{
    this.router.navigate(['list'])
  }

  onDelete():void{
    alert('Delete')
  }

  onFinish(): void{
    alert('Finished')
  }

}
