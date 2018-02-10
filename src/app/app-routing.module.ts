import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyProfileComponent }  from './company/components/profile/profile.component';
import { WebcastConsoleComponent }  from './webcasting/components/console/console.component';
import { WebcastEventListComponent }  from './webcasting/components/event-list/event-list.component';

const routes: Routes = [
  { path: 'company/profile', component: CompanyProfileComponent },
  { path: 'webcast/console/:id', component: WebcastConsoleComponent },
  { path: 'webcast/events', component: WebcastEventListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
