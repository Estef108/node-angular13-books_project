import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { comparePassword } from '../../validators/matchValidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!  : FormGroup;  
  
  public submitted: boolean = false;

  constructor( public authService: AuthService, public fb: FormBuilder, public router: Router ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  public buildForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$")]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    },
    {
      validator: comparePassword("password", "rePassword")
    } )
  }

  public registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe( (res:any) => {
      if (res.status == 201) {
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
    })
  }

}
