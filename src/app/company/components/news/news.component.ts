import { Component, OnInit } from '@angular/core';
import { PlatformidCompanyService } from '../../../common/services/platformid-company.service';
import { Company } from '../../classes/company';
import { DebuggerService } from "../../../common/services/debugger.service";
import { apiResponse } from "../../../common/classes/apiResponse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'company-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class CompanyNewsComponent implements OnInit {

  company: Company = new Company();
  private sub: any;

  constructor(private route: ActivatedRoute, private apiService: PlatformidCompanyService, private logger: DebuggerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadCompanyNews(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadCompanyNews(id:string): void {
    this.company = new Company();
    console.log(id);
    //this.apiService.loadCompany(id).subscribe(response => this.parseResponse(response));
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
  }
}
