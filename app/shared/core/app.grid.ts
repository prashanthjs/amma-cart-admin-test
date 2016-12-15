import {OnInit, AfterViewInit, Inject, Injector} from '@angular/core';
import {IList} from "../models/ilist";
import {GridComponent, DataStateChangeEvent, SortDescriptor} from "@progress/kendo-angular-grid";
import {AppDialogService} from "./app.dialog.service";
import {ListOptionsModel} from "../models/list.options.model";
import {AppDataService} from "./app.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

export class AppGrid<Model> implements OnInit, AfterViewInit {

  gridData: IList<any>;
  skip: number = 0;
  pageSize: number = 30;
  sort: SortDescriptor[] = [];
  grid: GridComponent;

  constructor(protected service: AppDataService<Model>,
              protected dialog: AppDialogService<Model>,
              protected loadingService: SlimLoadingBarService) {

  }

  init = (): void => {
    let listOptions = new ListOptionsModel(this.skip, this.pageSize, this.sort);
    this.service.getList(listOptions)
      .do(() => this.loadingService.start())
      .subscribe((result) => this.gridData = result, (error: any) => this.gridData = null, () => this.loadingService.complete());
  };


  ngOnInit(): void {
    this.init();
  }

  ngAfterViewInit(): void {
    this.grid.dataStateChange
      .do(({skip, take, sort}: DataStateChangeEvent) => {
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort ? sort : [];
      })
      .subscribe(() => this.init());
  }

  openForm(id: string) {
    this.dialog.openFormDialog(id, (error?: any, result?: any) => this.init());
  }

  remove(id: string) {
    this.dialog.openRemoveDialog(id, () => this.init());
  }
}
