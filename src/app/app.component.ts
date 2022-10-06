import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { setFilterBy } from './store/actions/customer.actions';
import { Header, SortTableState } from './store/models/customer-list.model';

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

  
  public searchControl = new FormControl('');

  constructor(private store: Store<SortTableState>){}

  
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      map((query: any) => query.toLowerCase())
    ).subscribe((query) => {
      this.store.dispatch(setFilterBy({ filters: { filterBy: ['lastName'], query: query } }));
    });
  }
}
