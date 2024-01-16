import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
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

        this.messageService.add({
          key: 'br',
          severity: 'success',
          detail: 'شما با موفقیت وارد شدید.',
        });
      },
      error: (error) => {
        console.log(error);

        this.messageService.add({
          key: 'br',
          severity: 'error',
          detail: 'ورود شما با خطا مواجه شد.لطفا دوباره امتحان کنید.',
        });
      },
    });
  }

  private signup(): void {
    this.messageService.add({
      key: 'br',
      severity: 'success',
      detail: 'شما با موفقیت ثبتنام کردید.',
    });
  }
}
