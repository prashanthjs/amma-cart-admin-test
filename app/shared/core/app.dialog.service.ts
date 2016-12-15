import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {overlayConfigFactory} from "angular2-modal";
import {AppDataService} from "./app.data.service";
import {error} from "util";

@Injectable()
export class AppDialogService<Model> {

  protected formModal: any;
  protected deleteTitle: string;
  protected deleteMessage: string;

  constructor(protected modal: Modal,
              protected dataService: AppDataService<Model>) {
  }


  openFormDialog(id?: string, callback: Function = (error?: any, result?: any) => {
  }): void {
    BSModalContext.prototype.size = 'lg';
    const dialog = this.modal.open(this.formModal, overlayConfigFactory({id: id}, BSModalContext));
    dialog.then((resultPromise) => {
      return resultPromise.result.then((result) => {
        callback(null, result);
      }, (error) => {
        callback(error);
      });
    });
  }

  openRemoveDialog(id: string, callback: Function = (error?: any, result?: any) => {
  }): void {

    const deleteMessage = sprintf(this.deleteMessage, {id: id});
    const dialog = this.modal.alert()
      .size('lg')
      .showClose(true)
      .title(this.deleteTitle)
      .body(deleteMessage)
      .open();
    dialog.then((resultPromise) => {
      return resultPromise.result.then((result) => {
        if (result) {
          this.dataService
            .removeById(id)
            .subscribe((result: any) => callback(null, result), (error: any) => callback(error));
        }
      });
    });
  }

}
