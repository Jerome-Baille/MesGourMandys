import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPowerOff, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { ToastService } from 'src/app/core/services/toast.service';

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
  origin!: string;

  userId!: any;

  faPowerOff = faPowerOff;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private contactService: ContactService,
    private toast: ToastService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userProfileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: [''],
      address: [''],
      city: [''],
      zipcode: [''],
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
        this.authService.updateUser(this.userProfile._id, this.userProfileForm.value)
          .subscribe({
            next: (v: any) => {
              this.toast.initiate({
                title: 'Profil mis à jour!',
                message: v.message,
              })
            },
            error: (err: any) => {
              this.toast.initiate({
                title: 'Erreur!',
                message: err.error.message,
              })
            }            
          });
      }
    }
  }

  onLogout(){
    this.authService.logout();
  }

  onDeleteAccount(){
    this.toast.initiate({
      title: 'Suppression du compte',
      message: 'Désirez-vous vraiment supprimer votre compte?',
      type: 'confirm'
    });

    this.toast.isConfirmed.subscribe({
      next: (v: any) => {
        if(!!v){
          this.authService.deleteUser(this.userProfile._id)
          .subscribe({
            next: (v: any) => {
              this.toast.initiate({
                title: 'Compte supprimé!',
                message: v.message,
              })
            },
            error: (err: any) => {
              this.toast.initiate({
                title: 'Erreur!',
                message: err.error.message,
              })
            },
            complete: () => {
              // set timeout to wait for the toast to be displayed
              setTimeout(() => {
                this.authService.logout();
              }, 2500);
            }
          });
        } else {
          return
        }
      }
    })
  }
}
