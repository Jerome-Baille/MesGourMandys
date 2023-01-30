import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Users } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$!: Observable<Users[]>;

  faTrash = faTrash;

  constructor(
    private authService: AuthService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers()
  }

  deleteUser(user: any){
    this.toast.initiate({
      title: 'Supression',
      message: 'Voulez-vous vraiment supprimer cet utilisateur?',
      type: 'confirm'
    })

    this.toast.isConfirmed.subscribe({
      next: (v: any) => {
        if(!!v){
          this.authService.deleteUser(user)
          .subscribe({
            next: (v: any) => {
              this.toast.initiate({
                title: 'Compte supprimé!',
                message: v.message,
              })
              this.users$ = this.authService.getAllUsers()
            },
            error: (err) => {
              this.toast.initiate({
                title: 'Erreur!',
                message: err.message,
              })
            }
          })
        } else {
          return
        }
      },
      error: (err) => {
        this.toast.initiate({
          title: 'Erreur!',
          message: err.message,
          type: 'error'
        })
      }
    })
  }
}
