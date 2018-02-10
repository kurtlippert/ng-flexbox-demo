import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { WebcastModule } from './webcasting/webcast.module';
import { CompanyModule } from './company/company.module';
import { DebuggerService } from './common/services/debugger.service';
import { PaginationComponent } from './common/components/utility/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    WebcastModule,
    HttpClientModule,
  ],
  providers: [
    DebuggerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
