import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {CategoryDataService} from "../../services/category.data.service";
import {AppAutoCompleteComponent} from "../../../shared/core/app.autocomplete.component";
import {CategoryModel} from "../../model/category.model";

@Component({
  moduleId: module.id,
  selector: 'category-autocomplete',
  templateUrl: 'category.autocomplete.template.html'
})

export class CategoryAutoCompleteComponent extends AppAutoCompleteComponent<CategoryModel>{

  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  constructor(dataService: CategoryDataService) {
    super(dataService);
  }
}
