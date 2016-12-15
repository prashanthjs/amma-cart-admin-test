import {OnInit, OnDestroy} from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AppDialogService} from "./app.dialog.service";
import {AppDataService} from "./app.data.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

export class AppViewComponent<Model> implements OnInit, OnDestroy {

  id: string;
  model: Model;
  protected subscription: Subscription;
  protected loadingErrorMessage: string;

  constructor(protected toastyService: ToastyService,
              protected dataService: AppDataService<Model>,
              protected dialog: AppDialogService<Model>,
              protected route: ActivatedRoute,
              protected  router: Router,
              protected loadingService: SlimLoadingBarService) {

  }

  init = () => {
    this.dataService.getById(this.id)
      .do(() => this.loadingService.start())
      .subscribe(this.handleResponse, this.handleLoadError, () => this.loadingService.complete());
  };

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
    this.init();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openForm() {
    this.dialog.openFormDialog(this.id, this.init);
  }

  remove() {
    this.dialog.openRemoveDialog(this.id, (result: any) => this.router.navigate(['../'], {relativeTo: this.route}));
  }

  handleResponse = (response: Model) => {
    this.model = response;
  }

  handleLoadError = (error: any) => {
    this.toastyService.error({
      title: 'Error',
      msg: this.loadingErrorMessage
    });
  }
}
