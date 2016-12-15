import {Injectable} from '@angular/core';
import {
  API_STORE_GET_LIST_END_POINT, API_STORE_CREATE_END_POINT, API_STORE_GET_BY_ID_END_POINT,
  API_STORE_UPDATE_BY_ID_END_POINT, API_STORE_DELETE_BY_ID_END_POINT
} from "../config/index";
import {AppHttp} from "../../shared/services/AppHttp";
import {AppDataService} from "../../shared/core/app.data.service";
import {StoreModel} from "../model/store.model";
import {Logger} from "angular2-logger/core";

@Injectable()
export class StoreDataService extends AppDataService<StoreModel> {
  constructor(restService: AppHttp, logger: Logger) {
    super(restService, logger);
    this.endPoints = {
      getList: API_STORE_GET_LIST_END_POINT,
      get: API_STORE_GET_BY_ID_END_POINT,
      create: API_STORE_CREATE_END_POINT,
      update: API_STORE_UPDATE_BY_ID_END_POINT,
      remove: API_STORE_DELETE_BY_ID_END_POINT
    };
  }
}
