import {Injectable} from '@angular/core';
import {
  API_USER_GET_LIST_END_POINT, API_USER_CREATE_END_POINT, API_USER_GET_BY_ID_END_POINT,
  API_USER_UPDATE_BY_ID_END_POINT, API_USER_DELETE_BY_ID_END_POINT
} from "../config/index";
import {AppHttp} from "../../shared/services/AppHttp";
import {UserModel} from "../model/user.model";
import {AppDataService} from "../../shared/core/app.data.service";
import {Logger} from "angular2-logger/core";

@Injectable()
export class UserDataService extends AppDataService<UserModel> {
  constructor(restService: AppHttp, logger: Logger) {
    super(restService, logger);
    this.endPoints = {
      getList: API_USER_GET_LIST_END_POINT,
      get: API_USER_GET_BY_ID_END_POINT,
      create: API_USER_CREATE_END_POINT,
      update: API_USER_UPDATE_BY_ID_END_POINT,
      remove: API_USER_DELETE_BY_ID_END_POINT
    };
  }
}
