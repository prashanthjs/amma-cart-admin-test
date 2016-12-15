import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {RoleDataService} from "./services/role.data.service";


@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [RoleDataService],
  exports: [],
  entryComponents: []

})

export class RoleModule {
}
