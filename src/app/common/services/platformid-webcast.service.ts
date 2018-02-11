import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { apiResponse } from '../classes/apiResponse';
import { DebuggerService } from './debugger.service';
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Basic WFhYYW5vbnltb3VzWFhYOg=='})
};

@Injectable()
export class PlatformidWebcastService {

  private apiURL = environment.companyhub;

  constructor (
    private http: HttpClient,
    private debugService: DebuggerService) { }

  /** GET Webcasts from the server */
  listPublicActive (): Observable<apiResponse> {
    let api = this.http.get(this.apiURL + '/api/webcast/event/public-active', httpOptions)
      .pipe(
        tap(Webcasts => this.log(`fetched Webcasts`)),
        catchError(this.handleError('getWebcasts', []))
      );
    return api as Observable<apiResponse>;
  }

  /** GET Webcasts from the server */
  loadEvent (id: string): Observable<apiResponse> {
    let api = this.http.get(this.apiURL + '/api/webcast/event/info?id=' + id, httpOptions)
      .pipe(
        tap(Webcasts => this.log(`fetched Webcasts`)),
        catchError(this.handleError('getWebcasts', []))
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a WebcastService message with the debugService */
  private log(message: string) {
    this.debugService.add('WebcastService: ' + message);
  }
}
