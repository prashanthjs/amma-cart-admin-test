import {Injectable} from '@angular/core';
import {
  API_CATEGORY_GET_LIST_END_POINT, API_CATEGORY_CREATE_END_POINT, API_CATEGORY_GET_BY_ID_END_POINT,
  API_CATEGORY_UPDATE_BY_ID_END_POINT, API_CATEGORY_DELETE_BY_ID_END_POINT
} from "../config/index";
import {AppHttp} from "../../shared/services/AppHttp";
import {AppDataService} from "../../shared/core/app.data.service";
import {CategoryModel} from "../model/category.model";
import {Logger} from "angular2-logger/core";

@Injectable()
export class CategoryDataService extends AppDataService<CategoryModel> {
  constructor(restService: AppHttp, logger: Logger) {
    super(restService, logger);
    this.endPoints = {
      getList: API_CATEGORY_GET_LIST_END_POINT,
      get: API_CATEGORY_GET_BY_ID_END_POINT,
      create: API_CATEGORY_CREATE_END_POINT,
      update: API_CATEGORY_UPDATE_BY_ID_END_POINT,
      remove: API_CATEGORY_DELETE_BY_ID_END_POINT
    };
  }
}
