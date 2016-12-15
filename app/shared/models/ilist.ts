import {SortDescriptor} from "@progress/kendo-angular-grid";
export interface IList<Model> {
  data: Model[];
  total: number;
}

export interface IListOptions {
  skip: number;
  pageSize: number;
  sort?: SortDescriptor[];
  filter?: any;
}

export interface IListServiceRespone<Model> {
  meta: {
    total: number
  };
  _embedded?: {
    result: Model[]
  },
  result: Model[],
  _links: any
}
