import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WebcastConsoleComponent } from './components/console/console.component';
import { WebcastEventListComponent } from './components/event-list/event-list.component';

import { DebuggerService } from '../common/services/debugger.service';
import { PlatformidWebcastService } from '../common/services/platformid-webcast.service';
import {LayoutModule} from "../common/module/layout.module";

@NgModule({
  declarations: [
    WebcastConsoleComponent,
    WebcastEventListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    DebuggerService,
    PlatformidWebcastService,
  ],
  bootstrap: [
  ]
})
export class WebcastModule { }
