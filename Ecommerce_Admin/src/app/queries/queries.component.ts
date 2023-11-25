import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

export interface Query {
  name: string;
  email: string;
  mobileNumber: number;
  query: string;
  status: string;
  resolution: string;
}

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.css'
})
export class QueriesComponent {


  data: Query[] = [
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Resolved', resolution: 'We will get back to you shortly' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Resolved', resolution: 'We will get back to you shortly' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
    { name: 'Lokesh', email: 'klokesh1999@gmail.com', mobileNumber: 8978527113, query: "Hi Admin, Please Check this issue", status: 'Pending', resolution: '' },
  ]

  displayedColumns: string[] = Object.keys(this.data[0]);

  constructor(private fb: FormBuilder) { }

  sendResolution(value: string) {
    console.log(value)
  }
}
