import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Dress} from '../dress-list/dress';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers(): void {
    this._userService.getAllUsers().subscribe((res) => {
      this.users = res;
      console.log('users', this.users);
    })
  }

}
