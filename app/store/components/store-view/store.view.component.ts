import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {StoreModel} from "../../model/store.model";
import {STORE_LOADING_ERROR_MESSAGE} from "../../config/index";
import {ActivatedRoute, Router} from "@angular/router";
import {StoreDialogService} from "../../services/store.dialog.service";
import {StoreDataService} from "../../services/store.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {AppViewComponent} from "../../../shared/core/app.view.component";

@Component({
  moduleId: module.id,
  selector: 'store-view',
  templateUrl: 'store.view.template.html'
})

export class StoreViewComponent extends AppViewComponent<StoreModel>{

  constructor(toastyService: ToastyService,
              dataService: StoreDataService,
              dialog: StoreDialogService,
              route: ActivatedRoute,
              router: Router,
              loadingService: SlimLoadingBarService) {
    super(toastyService, dataService, dialog, route, router, loadingService);
    this.loadingErrorMessage = STORE_LOADING_ERROR_MESSAGE;
  }

}
