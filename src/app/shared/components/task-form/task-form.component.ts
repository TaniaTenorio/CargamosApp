import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task: Task;
  taskForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.task = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.task === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.taskForm.patchValue(this.task)
    }
  }

  onSave(): void{
    console.log('Saved', this.taskForm.value)
  }

  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    })
  }

}
