import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUser: User;

  constructor() { }

  ngOnInit(): void {
  }

  getUser(user: User) {
    this.currentUser = user;
  }

}
