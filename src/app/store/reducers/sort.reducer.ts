import { Action, createReducer, on } from "@ngrx/store"
import { filter } from "rxjs";
import {  setFilterBy, setSortKey } from "../actions/customer.actions";
import {  Customer, SortTableState } from "../models/customer-list.model";
import {  SORT_INITIAL_STATE } from "../states/customer.state"

export const sortFeatureKey = 'sortCustomerList';
export const INITIAL_FILTER_KEY = { filterKey: '', query: '' };



 const _sortReducer = createReducer(
  SORT_INITIAL_STATE,
  on(setSortKey, (state, { sortKey }) => {
    sortKey = sortKey;

    let sortOrder: string;
    let data = state.data;

    if(sortKey !== state.sortKey){
        sortOrder = 'asc';
        const sortedData = [...state.data].sort((a, b) => {
            const paramA = a[sortKey as keyof Customer].toLowerCase();
            const paramB = b[sortKey as keyof Customer].toLowerCase();
            return compare(paramA, paramB, sortOrder);
        });
        data = sortedData;
    } else {
            sortOrder = setSortOrder(state.sortOrder);
            if(state.sortOrder !== '') {
                const sortedData = [...state.data].sort((a, b) => {
                    const paramA = a[sortKey as keyof Customer];
                    const paramB = b[sortKey as keyof Customer];
                    return compare(paramA, paramB, sortOrder);
                });
                data = sortedData;
            }        
       }
 
       return {
        ...state,
        data,
        sortKey,
        sortOrder,
      }

  }),

  on(setFilterBy, (state, { filters }) => {

    let filteredData = state.data;
    let data = filteredData;

    if(filters.query === ''){
        data = SORT_INITIAL_STATE.data;
    }
    if(filters.query !== ''){
        filteredData = state.data.filter((item: any) => {
            return item[filters.filterBy[0]]?.toLowerCase().includes(filters.query);
        });

        data = [...filteredData];
    }

    return {
        ...state,
        data,
        sortOrder: '', 
        sortKey: '', 
        filterQuery: filters.query, 
        filterBy: filters.filterBy,
    }
  })
);


export function sortReducer(state: SortTableState | undefined, action: Action) {
  return _sortReducer(state, action);
}

export function setSortOrder(sortOrder: string): string {
   switch(sortOrder) {
    case 'asc':
      return 'desc';
    case 'desc':
      return 'asc';
    case '':
      return 'asc';
    default:
      return '';
   }
}

function compare(paramA: string, paramB: string, sortOrder: string): number {
    if(paramA > paramB) {
        return sortOrder === 'asc' ? 1 : -1;
    }
    if(paramA < paramB) {
        return sortOrder === 'desc' ? 1: -1;
    }

    return 0;
}
