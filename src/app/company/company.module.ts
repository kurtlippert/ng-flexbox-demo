import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyProfileComponent } from './components/profile/profile.component';


import { DebuggerService } from '../common/services/debugger.service';
import { PlatformidCompanyService } from './services/platformid-company.service';

@NgModule({
  declarations: [
    CompanyProfileComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DebuggerService,
    PlatformidCompanyService,
  ],
  bootstrap: [
  ]
})
export class CompanyModule { }
