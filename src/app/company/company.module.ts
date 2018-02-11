import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { CompanyProfileComponent } from './components/profile/profile.component';

import { DebuggerService } from '../common/services/debugger.service';
import { PlatformidCompanyService } from '../common/services/platformid-company.service';

import { LayoutModule } from '../common/module/layout.module';
import { CompanyNewsComponent } from "./components/news/news.component";

@NgModule({
  declarations: [
    CompanyProfileComponent,
    CompanyNewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    DebuggerService,
    PlatformidCompanyService,
  ],
  bootstrap: [
  ]
})
export class CompanyModule { }
