import {Routes} from "@angular/router";
import {StoreListComponent} from '../components/store-list/store-list.component';
import {StoreViewComponent} from '../components/store-view/store-view.component';

export const STORE_ROUTES: Routes = [
  {path: 'stores', component: StoreListComponent},
  {path: 'stores/:id', component: StoreViewComponent},
];
