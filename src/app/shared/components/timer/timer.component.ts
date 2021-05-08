import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  
    taskDuration = 20;
    dateNow = new Date();
    //add task duration to current time
    dTime = this.dateNow.setMinutes(this.dateNow.getMinutes() + this.taskDuration);

    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDTime;
    public minutesToDTime;
    
    private getTimeDifference () {
        this.timeDifference = this.dTime - new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

  private allocateTimeUnits (timeDifference) {
        this.secondsToDTime = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDTime = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
  }

    ngOnInit() {
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }


}
