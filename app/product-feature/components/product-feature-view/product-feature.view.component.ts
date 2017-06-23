import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {ProductFeatureModel} from "../../model/product-feature.model";
import {PRODUCT_FEATURE_LOADING_ERROR_MESSAGE} from "../../config/index";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductFeatureDialogService} from "../../services/product-feature.dialog.service";
import {ProductFeatureDataService} from "../../services/product-feature.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {AppViewComponent} from "../../../shared/core/app.view.component";

@Component({
  moduleId: module.id,
  selector: 'product-feature-view',
  templateUrl: 'product-feature.view.template.html'
})

export class ProductFeatureViewComponent extends AppViewComponent<ProductFeatureModel>{

  constructor(toastyService: ToastyService,
              dataService: ProductFeatureDataService,
              dialog: ProductFeatureDialogService,
              route: ActivatedRoute,
              router: Router,
              loadingService: SlimLoadingBarService) {
    super(toastyService, dataService, dialog, route, router, loadingService);
    this.loadingErrorMessage = PRODUCT_FEATURE_LOADING_ERROR_MESSAGE;
  }

}
