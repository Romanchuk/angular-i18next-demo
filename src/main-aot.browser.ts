import { AppModuleNgFactory } from './../aot/src/app/AppModule.ngfactory';
/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';


/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/AppModule';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);
