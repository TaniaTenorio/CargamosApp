import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from 'src/app/shared/components/timer/timer.component';


@NgModule({
  declarations: [
    ListComponent,
    FilterPipe,
    SortPipe,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
