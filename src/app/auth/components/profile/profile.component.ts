import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPowerOff, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile!: any;
  userOrders!: any;
  userProfileForm!: FormGroup;
  formSubmitted: boolean = false;

  userId!: any;

  faPowerOff = faPowerOff;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.userProfileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: [''],
      address: [''],
      city: [''],
      zipCode: [''],
    });

    this.authService.getUserProfile()
      .subscribe((res: any) => {
        this.userProfile = res;
        this.userProfileForm.patchValue(this.userProfile);

        this.contactService.getOrderbyUserId(this.userProfile._id)
        .subscribe((res: any) => {
          this.userOrders = res;
        });
      });
  }

  onProfileUpdate(){
    this.formSubmitted = true;

    if(this.userProfileForm.valid){
      for(let prop in this.userProfileForm.value) {
        if(this.userProfileForm.value[prop] === ''){
          delete this.userProfileForm.value[prop];
        }
      }

      if(Object.keys(this.userProfileForm.value).length > 0){
        this.authService.updateUser(this.userId, this.userProfileForm.value)
          .subscribe((res: any) => {
            console.log(res);
          });
      }
    }
  }

  onLogout(){
    this.authService.logout();
  }
}
