import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {GridModule} from '@progress/kendo-angular-grid';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpModule} from "@angular/http";
import {AppHttp} from "./services/AppHttp";
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppFileComponent} from "./component/app-file/app-file.component";
import {ToastyModule} from "ng2-toasty";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import {StoreModule} from "../store/store.module";

@NgModule({
  declarations: [
    AppFileComponent
  ],
  imports: [
    ToastyModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  exports: [
    BrowserModule,
    HttpModule,
    GridModule,
    NgbModule,
    ToastyModule,
    SlimLoadingBarModule,
    ModalModule,
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule,
    AppFileComponent,
    CarouselModule
  ],
  providers: [AppHttp]
})

export class SharedModule {
}
