import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Users } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';

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
  ) { }

  ngOnInit(): void {
    this.users$ = this.authService.getAllUsers()
  }

  deleteUser(user: any){
    // ask for confirmation
    if(confirm('Voulez-vous vraiment supprimer cet utilisateur?')){
      this.authService.deleteUser(user)
        .subscribe({
          next: (v) => {
            console.log(v)
            this.users$ = this.authService.getAllUsers()
          },
          error: (err) => {
            console.log(err);
          }
        })
    }
  }
}
