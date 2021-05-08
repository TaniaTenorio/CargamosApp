import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
