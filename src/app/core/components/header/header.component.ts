import { Component, OnInit } from '@angular/core';
import { faBars, faBirthdayCake, faCrown, faHome, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AdminGuard } from '../../guards/admin.guard';
import { Users } from '../../models/users';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faBirthdayCake = faBirthdayCake;
  faHome = faHome;
  faShoppingCart = faShoppingCart;
  faCrown = faCrown;
  faUser = faUser;
  faStore = faStore;

  userInfo!: any;
  role!: any;

  collapsedMenu: boolean = true;

  constructor(
    public authService: AuthService
   ) { }

  ngOnInit(): void {
  }

  onDropdownClick(event: any) {
    if(this.collapsedMenu === true) {
      document.getElementById(`dropdown-menu`)?.classList.add("show");
      document.getElementById(`dropdown-menu`)?.classList.remove("hide");
      document.getElementById(`dropdown-menu`)?.classList.remove("d-none");
      this.collapsedMenu = false;
    } else {
      document.getElementById(`dropdown-menu`)?.classList.add("hide");
      document.getElementById(`dropdown-menu`)?.classList.remove("show");
      this.collapsedMenu = true;

      setTimeout(() => {
        document.getElementById(`dropdown-menu`)?.classList.add("d-none");
      }, 1000);
    }
  }
}
