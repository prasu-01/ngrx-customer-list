import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { sortReducer } from './store/reducers/sort.reducer';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ sort: sortReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
