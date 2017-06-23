import {Injectable} from '@angular/core';
import {
  API_PRODUCT_FEATURE_GET_LIST_END_POINT, API_PRODUCT_FEATURE_CREATE_END_POINT, API_PRODUCT_FEATURE_GET_BY_ID_END_POINT,
  API_PRODUCT_FEATURE_UPDATE_BY_ID_END_POINT, API_PRODUCT_FEATURE_DELETE_BY_ID_END_POINT
} from "../config/index";
import {AppHttp} from "../../shared/services/AppHttp";
import {AppDataService} from "../../shared/core/app.data.service";
import {ProductFeatureModel} from "../model/product-feature.model";
import {Logger} from "angular2-logger/core";

@Injectable()
export class ProductFeatureDataService extends AppDataService<ProductFeatureModel> {
  constructor(restService: AppHttp, logger: Logger) {
    super(restService, logger);
    this.endPoints = {
      getList: API_PRODUCT_FEATURE_GET_LIST_END_POINT,
      get: API_PRODUCT_FEATURE_GET_BY_ID_END_POINT,
      create: API_PRODUCT_FEATURE_CREATE_END_POINT,
      update: API_PRODUCT_FEATURE_UPDATE_BY_ID_END_POINT,
      remove: API_PRODUCT_FEATURE_DELETE_BY_ID_END_POINT
    };
  }
}
