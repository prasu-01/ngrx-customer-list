import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { loadCustomerListAction } from '../store/actions/customer.actions';
import { Customer } from '../store/models/customer-list.model';
import  { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers$: any;

  constructor(private store: Store<Customer[]>) { 
    this.loadCustomerList();
  }
 


  ngOnInit(): void {
    this.store.select((state) => state).subscribe((data: any) => {
       this.customers$ = data.customer.map((s: any) => {
          return {...s, id: uuidv4()};
        });
    })

  }


  loadCustomerList() {
    this.store.dispatch(loadCustomerListAction());
  }

 
}
