import { AppModuleNgFactory } from './../aot/src/app/AppModule.ngfactory';
/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main() {
    return platformBrowserDynamic()
        .bootstrapModuleFactory(AppModuleNgFactory)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
bootloader(main);
//# sourceMappingURL=main.browser.js.map