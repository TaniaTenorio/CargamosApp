import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form.component';
import { TaskGuard } from 'src/app/shared/guards/task.guard';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TaskFormComponent],
  providers: [TaskGuard]
})
export class TaskFormModule { }
