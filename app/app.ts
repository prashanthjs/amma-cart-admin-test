import {Component} from '@angular/core';
import {correctHeight, detectBody} from './app.helpers';
import {ToastyConfig} from 'ng2-toasty';
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.template.html',
})

export class AppComponent {

  constructor(private toastyConfig:ToastyConfig,) {
    this.toastyConfig.theme = 'bootstrap';
  }

  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind("load resize", function () {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });
  }

}
