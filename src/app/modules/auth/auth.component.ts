import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.interface';
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
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
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
    this.formType === 'login' ? this.login() : this.signup();
  }

  private login(): void {
    this.authService.login(this.form.value).subscribe({
      next: (res) => {
        this.authService.setUser(res);
        const params = this.route.snapshot.queryParams;

        if (params['redirectURL']) {
          this.router.navigate(['/'], {
            queryParams: { redirectURL: params['redirectURL'] },
          });
        } else {
          this.router.navigate(['home']);
        }

        alert('login success');
      },
      error: (error) => console.log(error),
    });
  }

  private signup(): void {
    this.authService.signup(this.form.value).subscribe({
      next: (res) => {
        alert('signup success');
      },
      error: (error) => console.log(error),
    });
  }
}
