import { Component } from '@angular/core';
import { page } from 'src/app/forms/data/user.data';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public pageNow: number[] = page;
  
  constructor() {
  }

}
