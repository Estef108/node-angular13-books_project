import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;

  constructor( public authService: AuthService, public fb: FormBuilder, public router: Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$")]],
    password: ['', [Validators.required]]
    })
  }

  public loginUser(){
    this.authService.signIn(this.signinForm.value);
    // window.alert('Usuario loggeado');
    this.router.navigate(['home'])
  }
}
