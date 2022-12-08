import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  formSubmitted: boolean = false;
  emailRegex!: RegExp;
  passwordRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    // Set email regex
    this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Set password regex (min 8 characters, 1 uppercase, 1 lowercase and 1 number)
    this.passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]]
    });
  }

  onRegister(){
    this.formSubmitted = true;
    const {firstName, lastName, email, password} = this.registerForm.value;

    if(this.registerForm.valid){
      this.authService.register(firstName, lastName, email, password)
        .subscribe({
          next: (res: any) => {
            this.toast.initiate({
              title: 'Compte créé avec succès!',
              message: res.message,
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
              this.authService.login(email, password)
                .subscribe((res: any) => {
                  document.cookie = `MesGourmandysToken=${res.token}`;
                  document.cookie = `MesGourmandysRole=${res.isAdmin}`;

                  this.router.navigate(['/auth/profil']);
                });
            }, 2500);
          }       
        });
    }
  }
}
