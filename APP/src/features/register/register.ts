import { Component, input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../types/user';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds = {} as RegisterCreds;
  membersFromHome = input.required<User[]>();
  cancelRegistration = output<boolean>();

  register(){

  }
  
  cancel(){
    this.cancelRegistration.emit(true);
  }
}
