import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {UserGroupDataService} from "../../services/user-group.data.service";
import {AppAutoCompleteComponent} from "../../../shared/core/app.autocomplete.component";
import {UserGroupModel} from "../../model/user-group.model";

@Component({
  moduleId: module.id,
  selector: 'user-group-autocomplete',
  templateUrl: 'user-group.autocomplete.template.html'
})

export class UserGroupAutoCompleteComponent extends AppAutoCompleteComponent<UserGroupModel>{

  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  constructor(dataService: UserGroupDataService) {
    super(dataService);
  }
}
