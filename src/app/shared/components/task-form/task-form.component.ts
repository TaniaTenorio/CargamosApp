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
      const task = {completed:false, ...this.taskForm.value};
      const taskId = this.task?.id || null;
      this.tasksSvc.onSaveTask(task, taskId);
      this.taskForm.reset();
    }
  }

  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  isValidField(field: string):string {
    const validatedField = this.taskForm.get(field);
      if (!validatedField.valid && validatedField.touched) {
        return 'is-invalid';
      } else if (validatedField.touched) {
        return 'is-valid';
      } else {
        return '';
      } 
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required]]
    })
  }

}
