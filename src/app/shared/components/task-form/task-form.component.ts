import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/pages/tasks/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task: Task;
  taskForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private tasksSvc: TasksService) {
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
    if (this.taskForm.valid) {
      const task = this.taskForm.value;
      const taskId = this.task?.id || null;
      this.tasksSvc.onSaveTask(task, taskId);
    }
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
