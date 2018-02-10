import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { CompanyProfileComponent } from './components/profile/profile.component';

import { DebuggerService } from '../common/services/debugger.service';
import { PlatformidCompanyService } from './services/platformid-company.service';

@NgModule({
  declarations: [
    CompanyProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DebuggerService,
    PlatformidCompanyService,
  ],
  bootstrap: [
  ]
})
export class CompanyModule { }
