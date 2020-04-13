import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private roles: string[];
  private authority: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _tokenStorage: TokenStorageService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.authority = new Map<string, boolean>();
    if (this._tokenStorage.getToken()) {
      this.roles = this._tokenStorage.getAuthorities();
      console.log('roles', this.roles);
      this.roles.forEach(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority['admin'] = true;
        }
        if (role === 'ROLE_PM') {
          this.authority['pm'] = true;
        }
        if (role === 'ROLE_USER') {
          this.authority['user'] = true;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  logout() {
    this._tokenStorage.signOut();
    window.location.reload();
  }

}
