import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WebcastConsoleComponent } from './components/console/console.component';
import { WebcastEventListComponent } from './components/event-list/event-list.component';

import { DebuggerService } from '../common/services/debugger.service';
import { PlatformidWebcastService } from './services/platformid-webcast.service';

@NgModule({
  declarations: [
    WebcastConsoleComponent,
    WebcastEventListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DebuggerService,
    PlatformidWebcastService,
  ],
  bootstrap: [
  ]
})
export class WebcastModule { }
