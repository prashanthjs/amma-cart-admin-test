import {Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {AppDataService} from "./app.data.service";


export class AppAutoCompleteComponent<Model> implements OnInit {

  searching: boolean = false;
  searchFailed: boolean = false;
  @Input() formElement: FormControl;
  @Input() skipId: string = null;
  @Input() limit: number = 5;
  selectedItem: any = {};

  constructor(protected dataService: AppDataService<Model>) {

  }

  ngOnInit(): void {
    this.setSelectedItem(this.formElement.value);
    this.formElement.valueChanges.subscribe(value => {
      this.setSelectedItem(value);
    });
  }

  setSelectedItem(value: string): void {

    if (!this.selectedItem || value != this.selectedItem._id) {
      this.selectedItem = {_id: value};
    }
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => {
        this.searching = true;
        this.formElement.setValue('');
      })
      .switchMap(term =>
        this.dataService.search(term, this.limit, this.skipId)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  formatter = (x: any) => x._id;

  onChange(event: NgbTypeaheadSelectItemEvent): void {
    this.formElement.setValue(event.item._id);
  }
}
