import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {PlatformidCompanyService} from "../../services/platformid-company.service";
import {PlatformidWebcastService} from "../../services/platformid-webcast.service";
import {Router} from "@angular/router";
import 'rxjs/add/operator/debounceTime';

export class Company {
  constructor(public name: string, public logo: string) { }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  searchCtrl: FormControl;
  searchData: Company[] = [];

  constructor(private router: Router, private apiService: PlatformidCompanyService) {
    this.searchCtrl = new FormControl();
    this.searchCtrl.valueChanges.debounceTime(400)
      .subscribe(value => {
        if (value === '') return;
        // i don't want to make another request on value change if content placeholder already has it.
        let exist = this.searchData.findIndex(t => t.name === value);
        if (exist > -1) return;

        // get data from the server. my response is an array [{id:1, text:'hello world'}]
        this.apiService.search(value).subscribe(res  => { this.searchData = res.data as Company[]; });

      });
  };

  selectCompany(value) {
    this.searchCtrl.setValue('');
    this.router.navigateByUrl('company/profile/' + value);
  }
}
