import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserList } from './user-list/user-list';
import { AddUser } from './add-user/add-user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UserList },
  { path: 'add-user', component: AddUser },
];
