import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  TAB: {
    USERS: boolean,
    ROLES: boolean,
    PRODUCTS: boolean
  };

  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  this.TAB = {
        USERS: true,
        ROLES: false,
        PRODUCTS: false
    };
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

  tabSelection(tab: string): void {
    this.TAB.USERS = false;
    this.TAB.ROLES = false;
    this.TAB.PRODUCTS = false;
    switch (tab) {
      case 'users':
        this.TAB.USERS = true;
        break;
      case 'roles':
        this.TAB.ROLES = true;
        break;
      case 'products':
        this.TAB.PRODUCTS = true;
        break;
    }
  }
}
