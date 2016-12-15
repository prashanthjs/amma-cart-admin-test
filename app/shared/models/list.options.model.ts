import {IListOptions} from "./ilist";
import {SortDescriptor} from "@progress/kendo-angular-grid";
export class ListOptionsModel<Model> implements IListOptions {
  constructor(public skip: number=0,
              public pageSize: number=10,
              public sort?: SortDescriptor[],
              public filter?: any[]) {

  }
}
