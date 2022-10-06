import { Action, createReducer, on } from "@ngrx/store"
import { loadCustomerListAction } from "../actions/customer.actions";
import { Customer } from "../models/customer-list.model";
import { CUSTOMER_INITIAL_STATE } from "../states/customer.state"


const _customersReducer = createReducer(
  CUSTOMER_INITIAL_STATE.customer,
    on(loadCustomerListAction, (state) => {
      return [...state]
    }),
 );


export function customersReducer(state: Customer[] | undefined, action: Action) {
    return _customersReducer(state, action);
}

