import { Component, OnInit } from '@angular/core';
import { Header } from './store/models/customer-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public header: Header[] = [
    { displayName: 'ID', key: 'id', hasSort: false },
    { displayName: 'First Name', key: 'firstName', hasSort: true },
    { displayName: 'Last Name', key: 'lastName', hasSort: true },
    { displayName: 'Status', key: 'status', hasSort: true },
  ];

  ngOnInit(): void {
  }
}
