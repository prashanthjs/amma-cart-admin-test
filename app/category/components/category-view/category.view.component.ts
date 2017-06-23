import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {CategoryModel} from "../../model/category.model";
import {CATEGORY_LOADING_ERROR_MESSAGE} from "../../config/index";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryDialogService} from "../../services/category.dialog.service";
import {CategoryDataService} from "../../services/category.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {AppViewComponent} from "../../../shared/core/app.view.component";

@Component({
  moduleId: module.id,
  selector: 'category-view',
  templateUrl: 'category.view.template.html'
})

export class CategoryViewComponent extends AppViewComponent<CategoryModel>{

  constructor(toastyService: ToastyService,
              dataService: CategoryDataService,
              dialog: CategoryDialogService,
              route: ActivatedRoute,
              router: Router,
              loadingService: SlimLoadingBarService) {
    super(toastyService, dataService, dialog, route, router, loadingService);
    this.loadingErrorMessage = CATEGORY_LOADING_ERROR_MESSAGE;
  }

}
