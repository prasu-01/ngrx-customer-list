import { Action, createReducer, on } from "@ngrx/store"
import { loadCustomerListAction } from "../actions/customer.actions";
import { Customer } from "../models/customer-list.model";
import { initialState } from "../states/customer.state"


const _customersReducer = createReducer(
    initialState.customer,
    on(loadCustomerListAction, (state) => {
      return [...state]
    })
 );

export function customersReducer(state: Customer[] | undefined, action: Action) {
    return _customersReducer(state, action);
}

