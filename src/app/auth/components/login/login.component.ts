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
    const {email, password} = this.loginForm.value;

    if(this.loginForm.valid){
      this.authService.login(email, password)
        .subscribe({
          next: (res: any) => {
            document.cookie = `MesGourmandysToken=${res.token}`;
            document.cookie = `MesGourmandysRole=${res.isAdmin}`;

            this.toast.initiate({
              title: 'Connexion réussie!',
              message: `Bienvenue ${res.firstName} ${res.lastName}, nous sommes ravis de vous revoir!`,
            });
          },
          error: (err: any) => {
            this.toast.initiate({
              title: 'Erreur',
              message: err.error.message
            });
          },
          complete: () => {
            setTimeout(() => {
              this.router.navigate(['/auth/profil']);
            }, 2500);
          }
        });
    }
  }

}
