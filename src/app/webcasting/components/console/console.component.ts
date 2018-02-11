import { Component, OnInit } from '@angular/core';
import {PlatformidWebcastService} from "../../../common/services/platformid-webcast.service";
import { ActivatedRoute } from '@angular/router';
import {DebuggerService} from "../../../common/services/debugger.service";
import {apiResponse} from "../../../common/classes/apiResponse";
import {Webcast} from "../../classes/webcast";

@Component({
  selector: 'webcast-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class WebcastConsoleComponent implements OnInit {
  webcast: Webcast = new Webcast();
  private sub: any;

  constructor(private route: ActivatedRoute, private apiService: PlatformidWebcastService, private logger: DebuggerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadEvent(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadEvent(id:string): void {
    this.webcast = new Webcast();
    this.apiService.loadEvent(id)
      .subscribe(response => this.parseResponse(response));
  }

  parseResponse(response: apiResponse) {
    if (response.status == 'SUCCESS') {
      if (response.count > 0) {
        this.webcast = response.data[0];
      } else {
        // No results found
        this.logger.add('WebcastConsoleComponent: No Results found');
      }
    } else {
      // Request failed
      this.logger.add('WebcastConsoleComponent: API request failed');
    }
  }
}
