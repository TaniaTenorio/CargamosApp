import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TimerComponent } from 'src/app/shared/components/timer/timer.component';


@NgModule({
  declarations: [
    HomeComponent,
    //TimerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
