import { createAction, props } from "@ngrx/store";


export enum CustomerActionTypes {
    LOAD_CUSTOMER_LIST = '[CUSTOMERLIST] Load Customers',
    SET_SORT_KEY = '[CUSTOMERLIST] Set Sort Key',
    RESET_CUSTOMERLIST = '[CUSTOMERLIST] Reset Store',
    SET_FILTER_BY = '[CUSTOMERLIST] Set Filter By Properties and Query', 
}

export const loadCustomerListAction = createAction(
    CustomerActionTypes.LOAD_CUSTOMER_LIST
);

export const setSortKey = createAction(
    CustomerActionTypes.SET_SORT_KEY, props<{ sortKey: string }>()
);
export const resetCustomerList = createAction(
    CustomerActionTypes.RESET_CUSTOMERLIST
);
export const setFilterBy = createAction(
    CustomerActionTypes.SET_FILTER_BY, props<{ filters: { filterBy: string[]; query: string } }>()); 
