import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface User {
  name: string;
  email: string;
  mobileNumber: number;
  isUserConfirmed: boolean
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSlideToggleModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  data: User[] = [
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, isUserConfirmed: true },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, isUserConfirmed: true },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, isUserConfirmed: true },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, isUserConfirmed: true },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, isUserConfirmed: true },
  ]
  displayedColumns: string[] = Object.keys(this.data[0]);

  change() {
    console.log("Changed")
  }
}
