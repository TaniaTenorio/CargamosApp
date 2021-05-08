import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForms: FormGroup;
  formTitle

  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  async onLogin() {
    const { email, password } = this.loginForms.value;
    try {
      const user = this.authSvc.login(email, password)
      if(user) {
        this.router.navigate(['/home'])
      }
    } catch(err) {
      console.log(err);
    }
  }

  private initForm():void {
    this.loginForms = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
