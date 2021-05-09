import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/pages/tasks/tasks.service';
import { Task } from '../../models/task.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task: Task;
  taskForm: FormGroup;
  duration;

  constructor(private router: Router, private fb: FormBuilder, private tasksSvc: TasksService) {
    const navigation = this.router.getCurrentNavigation();
    this.task = navigation?.extras?.state?.value;
    this.initForm();
  }

  setTaskDuration(): void {
    let timeToDeliver = this.taskForm.value.timeToDeliver
    if(timeToDeliver > 0 && timeToDeliver < 31) {
      this.duration = 'corta';
    } else if(timeToDeliver > 30 && timeToDeliver < 61) {
      this.duration = 'media';
    } else  if(timeToDeliver > 60 ){
      this.duration = 'larga';
    }
  }

  ngOnInit(): void {
    if (typeof this.task === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.taskForm.patchValue(this.task)
    }
  }

  async onSave(): Promise<void>{
    this.setTaskDuration()
    if (this.taskForm.valid) {
      try {
        const task = { duration: this.duration, ...this.taskForm.value};
        const taskId = this.task?.id || null;
        await this.tasksSvc.onSaveTask(task, taskId);
        Swal.fire('Tarea guardada', 'Tu tarea ha sido guardada con éxito', 'success')
        this.taskForm.reset();
      } catch(err) {
        console.log(err);
      } 
    } else {
      Swal.fire('¡Ups! Hubo un error', 'Revisa la información registrada en inténtalo nuevamente', 'error')
    }
  }

  onGoBackToList(): void{
    this.router.navigate(['list']);
  }

  isValidField(field: any):string {
    const validatedField = this.taskForm.get(field);
      if (!validatedField?.valid && validatedField?.touched) {
        return 'is-invalid';
      } else if (validatedField?.touched) {
        return 'is-valid';
      } else {
        return '';
      } 
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      timeToDeliver: ['', [Validators.required, Validators.max(120)]]
    })
  }

}
