import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onRegister(){
    this.formSubmitted = true;
    const {email, password} = this.registerForm.value;

    if(this.registerForm.valid){
      this.authService.register(email, password)
        .subscribe((res: any) => {
          console.log(res);
        });
    }
  }
}
