import {Routes} from "@angular/router";
import {mainViewComponent} from "./views/main-view/main-view.component";
import {minorViewComponent} from "./views/minor-view/minor-view.component";
import {USER_ROUTES} from "./user/config/routes";
import * as _ from 'lodash';
import {STORE_ROUTES} from "./store/config/routes";
import {USER_GROUP_ROUTES} from "./user-group/config/routes";
import {CATEGORY_ROUTES} from "./category/config/routes";
import {PRODUCT_FEATURE_ROUTES} from "./product-feature/config/routes";
import {PRODUCT_ROUTES} from "./product/config/routes";

let routes: Routes = [
  // Main redirect
  {path: '', redirectTo: 'mainView', pathMatch: 'full'},

  // App views
  {path: 'mainView', component: mainViewComponent},
  {path: 'minorView', component: minorViewComponent}

];

routes = _.concat(routes, USER_ROUTES);
routes = _.concat(routes, STORE_ROUTES);
routes = _.concat(routes, USER_GROUP_ROUTES);
routes = _.concat(routes, CATEGORY_ROUTES);
routes = _.concat(routes, PRODUCT_FEATURE_ROUTES);
routes = _.concat(routes, PRODUCT_ROUTES);

routes.push({path: '**', component: mainViewComponent});
export const ROUTES = routes;
