import {Routes} from "@angular/router";
import {UserListComponent} from '../components/user-list/user.list.component';
import {UserViewComponent} from '../components/user-view/user.view.component';

export const USER_ROUTES: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserViewComponent},
];
