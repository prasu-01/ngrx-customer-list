import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Customer, SortTableState } from "../models/customer-list.model";
import * as sortReducer from '../reducers/sort.reducer';


export const selectSortTableState = createFeatureSelector<SortTableState>(sortReducer.sortFeatureKey);


export const selectSortData = createSelector(
     selectSortTableState,
    (state: SortTableState) => state.data
);

export const selectSortOrder = createSelector(
    selectSortTableState,
    (state: SortTableState) => state.sortOrder
);


export const selectSortKey = createSelector(
    selectSortTableState,
    (state: SortTableState) => state.sortKey
);

export const selectSortedCustomerList = createSelector(
    selectSortTableState,
    (state: SortTableState) => {
        if(state.sortOrder === '') {
            return state.data;
        }

        const sortedData = [...state.data].sort((a, b) => {
            const paramA = a[state.sortKey as keyof Customer];
            const paramB = b[state.sortKey as keyof Customer];
            return compare(paramA, paramB, state.sortOrder);
          });
          state.data = [...sortedData];
          return state.data;
    }
);



export const selectFilterQuery = createSelector(
    selectSortTableState, 
    (state: SortTableState) => state.filterQuery
  );


export const selectFilterBy = createSelector(
    selectSortTableState, 
    (state: SortTableState) => state.filterBy
);


function compare(paramA: string, paramB: string, sortOrder: string): number {
    if(paramA > paramB) {
        return sortOrder === 'asc' ? 1 : -1;
    }
    if(paramA < paramB) {
        return sortOrder === 'desc' ? 1: -1;
    }

    return 0;
}

