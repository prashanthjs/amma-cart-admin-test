/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      "@progress": 'npm:@progress',
      '@telerik': 'npm:@telerik',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      'lodash': 'npm:lodash/core.min.js',
      'jquery': 'npm:jquery/dist/jquery.min.js',
      'metismenu': 'npm:metismenu/dist/metisMenu.min.js',
      'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js',
      'url-join': 'npm:url-join/lib/url-join.js',
      'angular2-modal': 'npm:angular2-modal',
      'angular2-modal/plugins/bootstrap': 'npm:angular2-modal/bundles',

      // other libraries
      'rxjs': 'npm:rxjs',
      'moment': 'npm:moment',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'sprintf-js': 'npm:sprintf-js/dist/sprintf.min.js',
      'ng2-toasty': 'npm:ng2-toasty',
      'angular2-logger': 'npm:angular2-logger',
      'ng2-slim-loading-bar': 'node_modules/ng2-slim-loading-bar',
      'ng2-bootstrap/ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      "angular2-modal": {defaultExtension: 'js', "main": 'bundles/angular2-modal.umd'},
      "angular2-modal/plugins/bootstrap": {defaultExtension: 'js', main: 'angular2-modal.bootstrap.umd'},


      "@progress/kendo-angular-grid": {"main": "./dist/npm/js/main.js", "defaultExtension": "js"},

      '@telerik/kendo-inputs-common': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@telerik/kendo-draggable': {
        defaultExtension: 'js',
        main: "./dist/npm/js/Draggable.js"
      },
      '@telerik/kendo-dropdowns-common': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@telerik/kendo-intl': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-angular-intl': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-angular-popup': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-angular-resize-sensor': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-charts': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-drawing': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      '@progress/kendo-popup-common': {
        defaultExtension: 'js',
        main: "./dist/npm/js/main.js"
      },
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        main: './bundles/Rx.js',
        defaultExtension: 'js'
      },
      "ng2-restangular": {"main": "./index.js", "defaultExtension": "js"},
      moment: {
        main: './moment.js',
        defaultExtension: 'js'
      },
      'ng2-toasty': {main: 'index.js', defaultExtension: 'js'},
      'angular2-logger': {defaultExtension: 'js'},
      'ng2-slim-loading-bar':  { main: 'index.js',  defaultExtension: 'js' }
    }
  });
})(this);
