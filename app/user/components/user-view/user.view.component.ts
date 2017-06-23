import {Component} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {UserModel} from "../../model/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDialogService} from "../../services/user.dialog.service";
import {AppViewComponent} from "../../../shared/core/app.view.component";
import {UserDataService} from "../../services/user.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {USER_LOADING_ERROR_MESSAGE} from "../../config/index";

@Component({
  moduleId: module.id,
  selector: 'user-view',
  templateUrl: 'user.view.template.html'
})

export class UserViewComponent extends AppViewComponent<UserModel> {

  constructor(toastyService: ToastyService,
              dataService: UserDataService,
              dialog: UserDialogService,
              route: ActivatedRoute,
              router: Router,
              loadingService: SlimLoadingBarService) {
    super(toastyService, dataService, dialog, route, router, loadingService);
    this.loadingErrorMessage = USER_LOADING_ERROR_MESSAGE;
  }
}
