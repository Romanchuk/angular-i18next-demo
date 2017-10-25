import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SimpleDemoComponent } from './../content/simple-demo.component';
import { AppErrorComponent } from './../structure/app-error.component';
import { AccessDeniedComponent } from './../content/access-denied/access-denied.component';

export const appRoutes: Routes = [
  { path: '', component: SimpleDemoComponent },
  { path: 'rich_form', loadChildren: 'app/features/rich_form_feature/RichFormFeatureModule#RichFormFeatureModule' },
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
