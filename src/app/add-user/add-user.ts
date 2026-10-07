import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../iuser.interface';
import { users } from '../users';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-user',
  styleUrl: './add-user.css',
  templateUrl: './add-user.html',
})
export class AddUser {
  usersArray: IUser[] = users;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  addUser() {
    if (this.userForm.valid) {
      let input: any = this.userForm.value;
      let newUser: IUser = {
        firstName: input.firstName,
        lastName: input.lastName,
        age: input.age,
        email: input.email,
      };
      this.usersArray.push(newUser);
      this.userForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
