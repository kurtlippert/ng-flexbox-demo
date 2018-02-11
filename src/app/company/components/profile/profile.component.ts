import { Component, OnInit } from '@angular/core';
import { PlatformidCompanyService } from '../../../common/services/platformid-company.service';
import { Company } from '../../classes/company';
import { DebuggerService } from "../../../common/services/debugger.service";
import { apiResponse } from "../../../common/classes/apiResponse";
import { MatTabChangeEvent } from '@angular/material';
import { HeaderComponent} from "../../../common/components/layout/header.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'company-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  company: Company = new Company();
  private sub: any;

  constructor(private route: ActivatedRoute, private apiService: PlatformidCompanyService, private logger: DebuggerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadCompany(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadCompany(id:string): void {
    this.company = new Company();
    this.apiService.loadCompany(id)
    .subscribe(response => this.parseResponse(response));
  }

  parseResponse(response: apiResponse) {
    if (response.status == 'SUCCESS') {
      if (response.count > 0) {
        this.company = response.data[0];
      } else {
        // No results found
        this.logger.add('CompanyProfileComponent: No Results found');
      }
    } else {
      // Request failed
      this.logger.add('CompanyProfileComponent: API request failed');
    }
    this.getWebcasts();
    this.getStockPrice();
  }
// Not sure whether to do these here or in a component
  getWebcasts() {}
  getStockPrice() {}

  onTopTabsClick (event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.loadTabInvestorKit();
        break;
      case 1:
        this.loadTabAbout();
        break;
      case 2:
        this.loadTabWebcast();
        break;
      case 3:
        this.loadTabTranscripts();
        break;
    }
  }

  loadTabInvestorKit() {}
  loadTabAbout() {}
  loadTabWebcast() {}
  loadTabTranscripts() {}

  onBottomTabsClick (event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.loadTabNews();
        break;
      case 1:
        this.loadTabCommentary();
        break;
      case 2:
        this.loadTabMedia();
        break;
      case 3:
        this.loadTabResearch();
        break;
    }
  }

  loadTabNews() {}
  loadTabCommentary() {}
  loadTabMedia() {}
  loadTabResearch() {}
}
