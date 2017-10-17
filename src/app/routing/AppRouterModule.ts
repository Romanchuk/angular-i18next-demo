import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppErrorComponent } from './../structure/app-error.component';
import { AccessDeniedComponent } from './../content/access-denied/access-denied.component';

export const appRoutes: Routes = [
  //{ path: '', redirectTo: 'api01/new', pathMatch: 'full' },

  //{ path: 'request_list', loadChildren: 'app/features/request_list/RequestListFeatureModule#RequestListFeatureModule' }, //https://www.npmjs.com/package/angular2-router-loader
  //{ path: 'api01', loadChildren: 'app/features/api01/Api01FeatureModule#Api01FeatureModule' },

 // { path: 'api01', loadChildren: loadApi01FeatureModule },

    { path: 'denied', component: AccessDeniedComponent, data: { title: 'error:access_denied' }}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRouterModule { }
