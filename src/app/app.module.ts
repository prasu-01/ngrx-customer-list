import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from './store/reducers/customer.reducer';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ customer: customersReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
