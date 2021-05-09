import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskGuard } from 'src/app/shared/guards/task.guard';
import { EditComponent } from './edit.component';

const routes: Routes = [{ path: '', component: EditComponent, canDeactivate: [TaskGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
