import {IListOptions, IList} from "../models/ilist";
import {Observable} from "rxjs";

export interface IService<Model> {
  getList(options: IListOptions): Observable<IList<Model>>;
}
