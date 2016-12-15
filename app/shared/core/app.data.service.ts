import {Injectable} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {Logger} from "angular2-logger/core";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {IListOptions, IList, IListServiceRespone} from "../models/ilist";
import {ListModel} from "../models/list.model";
import {AppHttp} from "../services/AppHttp";

import {sprintf} from 'sprintf-js';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {ListOptionsModel} from "../models/list.options.model";
@Injectable()
export class AppDataService<Model> {

  protected endPoints = {
    getList: '',
    get: '',
    create: '',
    update: '',
    remove: ''
  };


  constructor(protected restService: AppHttp,
              protected logger: Logger) {
  }


  getList(options?: IListOptions): Observable<IList<Model>> {

    if (!options) {
      options = new ListOptionsModel(0, 100, [], []);
    }

    const params: URLSearchParams = new URLSearchParams();
    params.set('skip', options.skip + "");
    params.set('pageSize', options.pageSize + "");
    params.set('sort', JSON.stringify(options.sort));
    params.set('filter', JSON.stringify(options.filter));
    this.log(params);
    return this.restService.get(this.endPoints.getList, {
      search: params
    }).map((response: IListServiceRespone<Model>) => {
      response = this.handleResponse(response);
      const total: number = response.meta.total;
      const result: Model[] = response._embedded ? response._embedded.result : response.result;
      return new ListModel<Model>(result, total);
    })
      .catch(this.handleError);
  }

  getById(id: string): Observable<Model> {
    const url = sprintf(this.endPoints.get, {id: id});

    return this.restService.get(url)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  search(text: string, limit = 5, skipId: string = null): Observable<Model[]> {
    if (text === '') {
      return Observable.of([]);
    }
    const data = {
      filter: {
        logic: "and",
        filters: [{
          "field": "_id",
          "operator": "contains",
          "value": text
        }],
      },
      pageSize: limit,
      skip: 0
    };

    if (skipId) {
      data.filter.filters.push({
        "field": "_id",
        "operator": "ne",
        "value": skipId
      });
    }
    return this.getList(data).map((response: ListModel <Model>) => response.data);
  }

  save(model: Model, id?: string): Observable<Model> {
    let service: Observable<any> = null;
    this.log(model);
    if (id) {
      const url = sprintf(this.endPoints.update, {id: id});
      service = this.restService.put(url, JSON.stringify(model));
    } else {
      service = this.restService.post(this.endPoints.create, JSON.stringify(model));
    }
    return service.map(this.handleResponse).catch(this.handleError);
  }

  removeById(id: string): Observable<Model> {
    const url = sprintf(this.endPoints.remove, {id: id});
    return this.restService.delete(url)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  private log = (result: any): void => {
    this.logger.info(result);
  };

  private handleResponse = (result: any): any => {
    this.log(result);
    return result;
  };

  private handleError = (error: any): ErrorObservable => {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  };
}
