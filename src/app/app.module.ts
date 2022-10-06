import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from './store/reducers/customer.reducer';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { sortReducer } from './store/reducers/sort.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ sort: sortReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
