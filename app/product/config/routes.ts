import {Routes} from "@angular/router";
import {ProductListComponent} from '../components/product-list/product.list.component';
import {ProductViewComponent} from '../components/product-view/product.view.component';

export const PRODUCT_ROUTES: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductViewComponent},
];
