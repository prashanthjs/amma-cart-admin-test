import {Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {AppDataService} from "./app.data.service";


export class AppAutoCompleteComponent<Model> {

  searching: boolean = false;
  searchFailed: boolean = false;
  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  selectedItem: any = null;

  constructor(protected dataService: AppDataService<Model>) {

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => {
        this.searching = true;
      })
      .switchMap(term =>
        this.dataService.search(term, this.limit, this.skipId)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: any) => '';

  onChange(event: NgbTypeaheadSelectItemEvent): void {
    this.formElement.setValue(event.item._id);
    this.selectedItem = {_id: ''};
  }
}
