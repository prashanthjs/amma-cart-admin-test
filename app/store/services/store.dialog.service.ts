import {Injectable} from '@angular/core';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {StoreFormModal} from "../components/store-form/store.form.modal";
import {AppDialogService} from "../../shared/core/app.dialog.service";
import {StoreModel} from "../model/store.model";
import {StoreDataService} from "./store.data.service";

@Injectable()
export class StoreDialogService extends AppDialogService<StoreModel>{

  constructor(modal: Modal,
              dataService: StoreDataService) {
      super(modal, dataService);
      this.formModal = StoreFormModal;
      this.deleteTitle = 'Delete Store';
      this.deleteMessage = '<h4> Are you sure want to delete store %(id)s</h4>'
  }
}
