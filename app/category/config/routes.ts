import {Routes} from "@angular/router";
import {CategoryListComponent} from '../components/category-list/category.list.component';
import {CategoryViewComponent} from '../components/category-view/category.view.component';

export const CATEGORY_ROUTES: Routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryViewComponent},
];
