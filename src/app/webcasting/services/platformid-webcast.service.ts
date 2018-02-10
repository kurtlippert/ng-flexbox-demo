import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Webcast } from '../classes/webcast';
import { DebuggerService } from '../../common/services/debugger.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlatformidWebcastService {

  private apiURL = 'api/Webcastes';  // URL to web api

  constructor(
    private http: HttpClient,
    private debugService: DebuggerService) { }

  /** GET Webcasts from the server */
  getWebcasts (): Observable<Webcast[]> {
    return this.http.get<Webcast[]>(this.apiURL)
      .pipe(
        tap(Webcastes => this.log(`fetched Webcastes`)),
        catchError(this.handleError('getWebcastes', []))
      );
  }

  /** GET Webcast by id. Return `undefined` when id not found */
  getWebcastNo404<Data>(id: number): Observable<Webcast> {
    const url = `${this.apiURL}/?id=${id}`;
    return this.http.get<Webcast[]>(url)
      .pipe(
        map(Webcastes => Webcastes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Webcast id=${id}`);
        }),
        catchError(this.handleError<Webcast>(`getWebcast id=${id}`))
      );
  }

  /** GET Webcast by id. Will 404 if id not found */
  getWebcast(id: number): Observable<Webcast> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Webcast>(url).pipe(
      tap(_ => this.log(`fetched Webcast id=${id}`)),
      catchError(this.handleError<Webcast>(`getWebcast id=${id}`))
    );
  }

  /* GET Webcasts whose name contains search term */
  searchWebcasts(term: string): Observable<Webcast[]> {
    if (!term.trim()) {
      // if not search term, return empty Webcast array.
      return of([]);
    }
    return this.http.get<Webcast[]>(`api/Webcastes/?name=${term}`).pipe(
      tap(_ => this.log(`found Webcastes matching "${term}"`)),
      catchError(this.handleError<Webcast[]>('searchWebcastes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Webcast to the server */
  addWebcast (Webcast: Webcast): Observable<Webcast> {
    return this.http.post<Webcast>(this.apiURL, Webcast, httpOptions).pipe(
      tap((Webcast: Webcast) => this.log(`added Webcast w/ id=${Webcast.id}`)),
      catchError(this.handleError<Webcast>('addWebcast'))
    );
  }

  /** DELETE: delete the Webcast from the server */
  deleteWebcast (Webcast: Webcast | number): Observable<Webcast> {
    const id = typeof Webcast === 'number' ? Webcast : Webcast.id;
    const url = `${this.apiURL}/${id}`;

    return this.http.delete<Webcast>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Webcast id=${id}`)),
      catchError(this.handleError<Webcast>('deleteWebcast'))
    );
  }

  /** PUT: update the Webcast on the server */
  updateWebcast (Webcast: Webcast): Observable<any> {
    return this.http.put(this.apiURL, Webcast, httpOptions).pipe(
      tap(_ => this.log(`updated Webcast id=${Webcast.id}`)),
      catchError(this.handleError<any>('updateWebcast'))
    );
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
