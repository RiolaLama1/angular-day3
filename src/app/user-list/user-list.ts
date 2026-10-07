import { Component } from '@angular/core';
import { IUser } from '../iuser.interface';
import { users } from '../users';

@Component({
  imports: [],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  usersArray: IUser[] = users;
}
