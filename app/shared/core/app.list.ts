import {AppDialogService} from "./app.dialog.service";
import {AppGrid} from "./app.grid";
export class AppListComponent<Model> {
  list: AppGrid<Model>;

  constructor(protected dialog: AppDialogService<Model>) {
  }

  openForm() {
    this.dialog.openFormDialog(null, () => this.list.init());
  }
}
