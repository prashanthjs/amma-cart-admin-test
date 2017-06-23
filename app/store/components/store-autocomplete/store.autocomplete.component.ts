import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {StoreDataService} from "../../services/store.data.service";
import {AppAutoCompleteComponent} from "../../../shared/core/app.autocomplete.component";
import {StoreModel} from "../../model/store.model";

@Component({
  moduleId: module.id,
  selector: 'store-autocomplete',
  templateUrl: 'store.autocomplete.template.html'
})

export class StoreAutoCompleteComponent extends AppAutoCompleteComponent<StoreModel>{

  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  constructor(dataService: StoreDataService) {
    super(dataService);
  }
}
