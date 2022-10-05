import { createAction, props } from "@ngrx/store";


export enum CustomerActionTypes {
    LOAD_CUSTOMER_LIST = '[CUSTOMERLIST] Load Customers',
}

export const loadCustomerListAction = createAction(
    CustomerActionTypes.LOAD_CUSTOMER_LIST
);
