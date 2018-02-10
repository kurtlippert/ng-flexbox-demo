import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { apiResponse } from '../../common/classes/apiResponse';
import { environment } from '../../../environments/environment';
import { DebuggerService } from '../../common/services/debugger.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Basic WFhYYW5vbnltb3VzWFhYOg=='})
};

@Injectable()
export class PlatformidCompanyService {

  private apiURL = environment.companyhub;

  constructor (
    private http: HttpClient,
    private debugService: DebuggerService) { }

  /** GET Companies from the server */
  loadCompany (id: string): Observable<apiResponse> {
    let url = this.apiURL + '/api/company/profile/info?id=' + id;
    console.log(url);
    let api = this.http.get(url, httpOptions)
      .pipe(
        tap(apiResponse => this.log(`fetched Companies`)),
        catchError(this.handleError('getCompanies', []))
      );
    return api as Observable<apiResponse>;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to profile instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CompanyService message with the debugService */
  private log(message: string) {
    this.debugService.add('CompanyService: ' + message);
  }
}
