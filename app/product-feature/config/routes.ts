import {Routes} from "@angular/router";
import {ProductFeatureListComponent} from '../components/product-feature-list/product-feature.list.component';
import {ProductFeatureViewComponent} from '../components/product-feature-view/product-feature.view.component';

export const PRODUCT_FEATURE_ROUTES: Routes = [
  {path: 'product-features', component: ProductFeatureListComponent},
  {path: 'product-features/:id', component: ProductFeatureViewComponent},
];
