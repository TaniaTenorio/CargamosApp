import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // use observable created in tasks service
  tasks$ = this.tasksSvc.tasks;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  constructor(private router: Router, private tasksSvc: TasksService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  onGoToDetails(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }
  onDelete(item: any): void{
    alert('Deleted')
  }

}
