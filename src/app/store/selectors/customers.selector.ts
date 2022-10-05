import { createSelector } from "@ngrx/store";
import { CustomerState } from "../states/customer.state";


export const getCustomersSelector = createSelector(
    (state: CustomerState) => state.customer,
    (customer) => customer
);



