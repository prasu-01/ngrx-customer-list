export interface Customer{
    firstName: string;
    lastName: string;
    status: string;
}

export interface SortTableState {
    data: Customer[],
    sortOrder: string;
    sortKey: string;
    filterQuery: string;
    filterBy: string[];
  }

  export interface Header {
    displayName: string;
    key: string;
    hasSort: boolean;
  }
  