import {OnInit} from '@angular/core';

import {DialogRef, ModalComponent, CloseGuard} from 'angular2-modal';
import {BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {FormGroup, FormBuilder} from "@angular/forms";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {ToastyService} from "ng2-toasty";
import {AppDataService} from "./app.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";


export class FormModalContext extends BSModalContext {
  id?: string;
}

export class AppModal<Model> implements CloseGuard, ModalComponent<FormModalContext>, OnInit {

  modelForm: FormGroup;
  id: string;
  isSubmitted: boolean;
  context: FormModalContext;
  loadingMessageError: string;
  saveSuccessMessage: string;
  saveErrorMessage: string;

  constructor(public dialog: DialogRef<FormModalContext>,
              protected formBuilder: FormBuilder,
              protected dataService: AppDataService<Model>,
              protected toastyService: ToastyService,
              protected loadingService: SlimLoadingBarService) {
    this.context = dialog.context;
    dialog.setCloseGuard(this);
  }

  ngOnInit(): void {
    this.id = this.context.id;
    this.init();
  }

  init() {
    this.resetStates();
    if (this.id) {
      this.dataService
        .getById(this.id)
        .do(() => this.loadingService.start())
        .subscribe(this.populateForm, this.handleModelLoadError, () => this.loadingService.complete());
    }
    this.modifyForm();
  }


  submit(event: any) {
    this.isSubmitted = true;
    if (this.modelForm.valid) {
      const model = this.transformFormToModelValues(Object.assign({}, this.modelForm.value));
      this.dataService.save(model, this.id)
        .do(() => this.loadingService.start())
        .subscribe(this.handleSave, this.handleModelSaveError, () => this.loadingService.complete());
    }
    console.log(this.modelForm.value);
    console.log(this.modelForm);
    event.preventDefault();
  }


  close() {
    this.dialog.setCloseGuard(false);
    this.dialog.dismiss();
  }

  protected transformModelToFormValues(model: any) {
    return model;
  }

  protected transformFormToModelValues(model: any): Model {
    if (this.id) {
      delete model['_id'];
    }
    delete model['created'];
    delete model['updated'];
    return model;
  }

  protected modifyForm() {
  }

  protected resetStates() {
    this.isSubmitted = false;
  }

  populateForm = (result: Model): void => {

    this.modelForm.patchValue(this.transformModelToFormValues(result));
  };

  protected handleModelLoadError = (error: any): void => {
    this.id = null;
    this.toastyService.error({
      title: 'Error',
      msg: error
    });
  };

  protected handleSave = (result: any): void => {
    this.id = result._id;
    this.toastyService.success({
      title: 'Saved successfully',
      msg: this.saveSuccessMessage
    });
    this.init();
  };

  protected handleModelSaveError = (error: any): void => {
    this.id = null;
    this.toastyService.error({
      title: 'Error',
      msg: error
    });
  };
}
