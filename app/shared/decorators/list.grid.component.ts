import {OnInit, AfterViewInit} from '@angular/core';
import {GridComponent, DataStateChangeEvent, SortDescriptor} from "@progress/kendo-angular-grid";
import {IList, IListOptions} from "../models/ilist";
import {IService} from "../services/iservice";
import {ListOptionsModel} from "../models/list.options.model";
import * as _ from "lodash";

declare const Reflect: any;

export interface IOnLoadGridData {
  onLoadGridData(): void;
}

export interface IAfterLoadGridData {
  afterLoadGridData(): void;
}


export interface IInitGrid {
  initGrid(): void;
}

class GridDecorator implements OnInit, AfterViewInit, IOnLoadGridData, IAfterLoadGridData, IInitGrid {

  gridData: IList<any>;
  skip: number = 0;
  pageSize: number = 30;
  sort: SortDescriptor[] = [];
  service: IService<any>;
  grid: GridComponent;


  loadData(): void {
    this.onLoadGridData();
    let listOptions = new ListOptionsModel(this.skip, this.pageSize, this.sort);
    this.service.getList(listOptions).subscribe((listData: IList<any>) => {
      this.gridData = listData;
      this.afterLoadGridData();
    });
  }


  initGrid(): void {

  }

  onLoadGridData(): void {

  }

  afterLoadGridData(): void {

  }

  ngOnInit(): void {
    this.initGrid();
    this.loadData();

  }

  ngAfterViewInit(): void {
    this.grid.dataStateChange
      .do(({skip, take, sort}: DataStateChangeEvent) => {
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort ? sort : [];
      })
      .subscribe(() => this.loadData());
  }

}

export function ListGridComponent(options: IListOptions) {
  return (target: Function) => {
    _.extend(target.prototype, GridDecorator.prototype);
    target.prototype.skip = options.skip ? options.skip : 0;
    target.prototype.pageSize = options.pageSize ? options.pageSize : 0;
    target.prototype.sort = options.sort ? options.sort : [];
  };
}
