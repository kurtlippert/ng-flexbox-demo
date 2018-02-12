import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PlatformidCompanyService } from '../../../common/services/platformid-company.service';
import { Company } from '../../classes/company';
import { DebuggerService } from "../../../common/services/debugger.service";
import { apiResponse } from "../../../common/classes/apiResponse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'company-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class CompanyMediaComponent implements OnInit {
  media: any[] = new Array();
  @Input() symbol: string;
  @Input() columns: number = 3;

  constructor(private route: ActivatedRoute, private apiService: PlatformidCompanyService, private logger: DebuggerService) { }

  ngOnInit() {
    this.loadCompanyNews(this.symbol);
  }

  loadCompanyNews(id:string): void {
    this.apiService.loadNewsBySymbol(id).subscribe(response => this.parseResponse(response));
  }

  parseResponse(response: apiResponse) {
    if (response.status == 'SUCCESS') {
      if (response.count > 0) {
        let group: any[] = new Array();
        let index = 1;
        for (let entry of response.data as any[]) {
          group.push(entry);
          if (index % this.columns == 0) {
            this.media.push(group);
            group = new Array();
          }
          index++;
        }
        this.media.push(group);
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
