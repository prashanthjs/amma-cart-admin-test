import {Injectable} from '@angular/core';
import {API_ROLE_GET_LIST_END_POINT} from "../config/index";
import {AppHttp} from "../../shared/services/AppHttp";
import {AppDataService} from "../../shared/core/app.data.service";
import {Logger} from "angular2-logger/core";
import {RoleModel} from "../model/role.model";

@Injectable()
export class RoleDataService extends AppDataService<RoleModel> {
  constructor(restService: AppHttp, logger: Logger) {
    super(restService, logger);
    this.endPoints = {
      getList: API_ROLE_GET_LIST_END_POINT,
      get: null,
      create: null,
      update: null,
      remove: null
    };
  }
}
