import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(){
    this.formSubmitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    const {email, password} = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe({
        next: (res: any) => {
          this.authService.setToken(res.token);

          this.toast.initiate({
            title: 'Connexion réussie!',
            message: `Bienvenue ${res.firstName} ${res.lastName}, nous sommes ravis de vous revoir!`,
          });

          setTimeout(() => {
            this.router.navigate(['/auth/profil']);
          }, 2500);
        },
        error: (err: any) => {
          this.toast.initiate({
            title: 'Erreur',
            message: err.error.message
          });
        }
      });
  }

}
