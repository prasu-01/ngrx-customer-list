import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { loadCustomerListAction } from '../store/actions/customer.actions';
import { Customer, Header } from '../store/models/customer-list.model';
import  { v4 as uuidv4 } from 'uuid';
import * as customerActions from '../store/actions/customer.actions';


@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  @Input() header!: Header[];
  public sortKey$!: string;
  public sortOrder$!: string;
  public sortData$!: any;



  constructor(private store: Store<Customer[]>) { 
    this.loadCustomerList();
  }
 


  ngOnInit(): void {

    this.store.select((state) => state).subscribe((data: any) => {
      this.sortKey$ = data.sort.sortKey;
    });

    this.store.select((state) => state).subscribe((data: any) => {
      this.sortOrder$ = data.sort.sortOrder;
    });

    this.store.select((state) => state).subscribe((data: any) => {
      this.sortData$ = data.sort.data.map((s: any) => {
        return {...s, id: uuidv4()};
      });
    });

  }

  ngOnDestroy(): void {
    this.store.dispatch(customerActions.resetCustomerList());
  }

  public onSort(headerItem: Header): void {
    if (!headerItem.hasSort) {
      return;
    }
    const sortKey = headerItem.key;
    this.store.dispatch(customerActions.setSortKey({ sortKey: sortKey }));
  }


  loadCustomerList() {
    this.store.dispatch(loadCustomerListAction());
  }

 
}
