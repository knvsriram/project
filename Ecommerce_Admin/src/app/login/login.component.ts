import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  uId: any;

  disableSubmit = false;

  returnUrl !: string;
  constructor(private fb: FormBuilder, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.ar.snapshot)
    this.returnUrl = this.ar.snapshot.queryParams['returnUrl'] || '/';
    // console.log(this.returnUrl)
  }

  g() {
    return this.loginForm.controls;
  }

  adminLogin() {
    this.disableSubmit = true;
    
  }

}
