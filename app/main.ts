import 'jquery';
import 'metismenu';
import 'bootstrap';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModuleRef} from '@angular/core';
import {AppModule} from './app.module';
import {appInjector} from "./app-injector";

platformBrowserDynamic().bootstrapModule(AppModule).then((appRef: NgModuleRef<AppModule>) => {
  appInjector(appRef.injector);
});
