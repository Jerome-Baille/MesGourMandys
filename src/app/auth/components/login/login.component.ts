import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private router: Router
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
        .subscribe((res: any) => {
          document.cookie = `MesGourmandysToken=${res.token}`;
          document.cookie = `MesGourmandysRole=${res.isAdmin}`;

          this.router.navigate(['/auth/profil']);
        });
    }
  }

}
