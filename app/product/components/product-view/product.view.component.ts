import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {ProductModel} from "../../model/product.model";
import {PRODUCT_LOADING_ERROR_MESSAGE} from "../../config/index";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDialogService} from "../../services/product.dialog.service";
import {ProductDataService} from "../../services/product.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {AppViewComponent} from "../../../shared/core/app.view.component";

@Component({
  moduleId: module.id,
  selector: 'product-view',
  templateUrl: 'product.view.template.html'
})

export class ProductViewComponent extends AppViewComponent<ProductModel>{

  constructor(toastyService: ToastyService,
              dataService: ProductDataService,
              dialog: ProductDialogService,
              route: ActivatedRoute,
              router: Router,
              loadingService: SlimLoadingBarService) {
    super(toastyService, dataService, dialog, route, router, loadingService);
    this.loadingErrorMessage = PRODUCT_LOADING_ERROR_MESSAGE;
  }

}
