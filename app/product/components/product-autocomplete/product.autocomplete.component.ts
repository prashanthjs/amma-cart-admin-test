import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {ProductDataService} from "../../services/product.data.service";
import {AppAutoCompleteComponent} from "../../../shared/core/app.autocomplete.component";
import {ProductModel} from "../../model/product.model";

@Component({
  moduleId: module.id,
  selector: 'product-autocomplete',
  templateUrl: 'product.autocomplete.template.html'
})

export class ProductAutoCompleteComponent extends AppAutoCompleteComponent<ProductModel>{

  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  constructor(dataService: ProductDataService) {
    super(dataService);
  }
}
