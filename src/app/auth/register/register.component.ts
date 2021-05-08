import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    this.initForm()
  }

  async onRegister() {
    const {email, password} = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['home'])
      }
    } catch(err) {
      console.log(err);
    }
  }

  isValidField(field: string):string {
    const validatedField = this.registerForm.get(field);
    return( !validatedField?.valid && validatedField?.touched)
    ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
