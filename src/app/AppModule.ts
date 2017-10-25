import { I18NextValidationMessageModule } from './../lib/angular-validation-i18next/I18NextValidationMessageModule';
import { ValidationModule } from './../lib/validation/ValidationModule';
import { NgModule, ApplicationRef, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { AppRouterModule } from './routing/AppRouterModule';


import { I18NextModule, I18NextService, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import * as i18nextXHRBackend from 'i18next-xhr-backend';
import * as i18nextLanguageDetector from 'i18next-browser-languagedetector';


/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';

import { AppComponent } from './AppComponent';
import { AppHeaderComponent } from './structure/app-header.component';
import { AppFooterComponent } from './structure/app-footer.component';
import { AppErrorComponent } from './structure/app-error.component';
import { HeaderLanguageComponent } from './structure/header-controls/header.language.component';
import { AccessDeniedComponent } from './content/access-denied/access-denied.component';
import { SimpleDemoComponent } from './content/simple-demo.component';



const i18nextOptions = {
  whitelist: ['en', 'ru'],
  fallbackLng: 'ru',
  debug: true, // set debug?
  returnEmptyString: false,
  ns: [
    'translation',
    'validation',
    'error',

    'feature.rich_form'
  ],
  //backend plugin options
  backend: {
    loadPath: function(langs, ns) { // todo: перенести локали каждой фичи к ней в папку
      return 'locales/{{lng}}.{{ns}}.json';
    }
  },
  // lang detection plugin options
  detection: {
    // order and from where user language should be detected
    order: ['cookie'],

    // keys or params to lookup language from
    lookupCookie: 'lang',

    // cache user language on
    caches: ['cookie'],

    // optional expire and domain for set cookie
    cookieMinutes: 10080, // 7 days
    cookieDomain: I18NEXT_LANG_COOKIE_DOMAIN
  }
};

export function appInit(i18next: ITranslationService) {
  return () => i18next
    .use(i18nextXHRBackend)
    .use(i18nextLanguageDetector)
    .init(i18nextOptions);
}

export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  },
];

type StoreType = {
  //state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    //app
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HeaderLanguageComponent,
    AppErrorComponent,
    SimpleDemoComponent,
    AccessDeniedComponent
  ],
  imports: [ // import Angular's modules
    //core
    BrowserModule,
    FormsModule,
    //lib
    I18NextModule.forRoot(),
    
    ValidationModule.forRoot(),
    //app
    AppRouterModule
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    I18N_PROVIDERS
  ],
  entryComponents: [

  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit(store: StoreType) {
    if (!store) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    //this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    //delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    //const state = this.appState._state;
    //store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

