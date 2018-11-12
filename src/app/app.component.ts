import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  today = new Date();
  val = 123.45;

  constructor(private session: SessionService) { }

  norway() {
    this.registerCulture('nb-NO');    
  }

  sweden() {
    this.registerCulture('sv-SE');    
  }

  private registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    this.session.locale = culture;
    const localeId = culture.substring(0, 2);

    this.localeInitializer(localeId).then(() => {
      this.today = new Date();
      this.val++;
    });    
  }

  localeInitializer(localeId: string): Promise<any> {
    return import(
      /* webpackInclude: /(nb|sv)\.js$/ */
      `@angular/common/locales/${localeId}.js`
      ).then(module => registerLocaleData(module.default));
  }
}
