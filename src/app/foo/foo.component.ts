import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  @Output() user: EventEmitter<User> = new EventEmitter<User>();

  genericUser = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@mail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  press() {
    this.user.emit(this.genericUser);
  }



}
