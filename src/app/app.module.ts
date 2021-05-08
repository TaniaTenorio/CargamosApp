import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { TaskFormModule } from './shared/components/task-form/task-form.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginFormModule } from './shared/components/login-form/login-form.module';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './shared/components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //TimerComponent,
    // LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    TaskFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    LoginFormModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
