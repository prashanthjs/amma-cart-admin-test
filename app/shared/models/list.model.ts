import {IList} from "./ilist";
export class ListModel<Model> implements IList<Model> {
  constructor(public data: Model[], public total: number) {

  }
}
