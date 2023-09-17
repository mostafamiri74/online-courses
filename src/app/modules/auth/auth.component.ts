import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;
  formType: string = 'login';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  get userName() {
    return this.form.get('userName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  public onToggleForm(): void {
    if (this.formType === 'login') {
      this.formType = 'signup';

      this.form.addControl(
        'userName',
        new FormControl('', [Validators.required])
      );
    } else {
      this.formType = 'login';

      this.form.contains('userName')
        ? this.form.removeControl('userName')
        : null;
    }
  }

  public onLoginOrSignup(): void {
    if (this.formType === 'login') {
      this.authService.login(this.form.value).subscribe((res) => {
        alert('login success');
      });
    } else {
      this.authService.signup(this.form.value).subscribe((res) => {
        alert('signup success');
      });
    }
  }
}
