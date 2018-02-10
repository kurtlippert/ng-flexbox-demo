import { Component, OnInit } from '@angular/core';
import { PlatformidCompanyService } from '../../services/platformid-company.service';
import { Company } from '../../classes/company';
import {DebuggerService} from "../../../common/services/debugger.service";
import {apiResponse} from "../../../common/classes/apiResponse";

@Component({
  selector: 'company-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  company: Company = new Company();

  constructor(private apiService: PlatformidCompanyService, private logger: DebuggerService) { }

  ngOnInit() {
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
  }
}
