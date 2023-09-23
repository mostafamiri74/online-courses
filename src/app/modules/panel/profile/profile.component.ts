import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.form = this.fb.group(
      {
        email: [{ value: '', disabled: true }],
        password: ['', Validators.minLength(6)],
        repeatPassword: [''],
        mobileNumber: [''],
        name: [''],
        family: [''],
        displayName: [''],
      },
      {
        validator: ConfirmedValidator('password', 'repeatPassword'),
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get repeatPassword() {
    return this.form.get('repeatPassword');
  }

  get userName() {
    return this.form.get('userName');
  }

  get displayName() {
    return this.form.get('displayName');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  public onLoginOrSignup(): void {}
}
