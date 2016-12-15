import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";

// App modules/components
import {NavigationModule} from "./views/common/navigation/navigation.module";
import {FooterModule} from "./views/common/footer/footer.module";
import {TopnavbarModule} from "./views/common/topnavbar/topnavbar.module";
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./user/user.module";


import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {StoreModule} from "./store/store.module";
import {UserGroupModule} from "./user-group/user-group.module";
import {Logger} from "angular2-logger/core";
import {RoleModule} from "./role/role.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    SharedModule,
    // Angular modules

    // Views
    MainViewModule,
    MinorViewModule,
    RoleModule,
    UserGroupModule,
    StoreModule,
    UserModule,

    // Modules
    NavigationModule,
    FooterModule,
    TopnavbarModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, Logger],
  bootstrap: [AppComponent]
})

export class AppModule {
}
