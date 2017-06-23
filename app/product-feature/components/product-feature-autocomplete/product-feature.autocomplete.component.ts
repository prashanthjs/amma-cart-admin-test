import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {ProductFeatureDataService} from "../../services/product-feature.data.service";
import {AppAutoCompleteComponent} from "../../../shared/core/app.autocomplete.component";
import {ProductFeatureModel} from "../../model/product-feature.model";

@Component({
  moduleId: module.id,
  selector: 'product-feature-autocomplete',
  templateUrl: 'product-feature.autocomplete.template.html'
})

export class ProductFeatureAutoCompleteComponent extends AppAutoCompleteComponent<ProductFeatureModel>{

  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  constructor(dataService: ProductFeatureDataService) {
    super(dataService);
  }
}
