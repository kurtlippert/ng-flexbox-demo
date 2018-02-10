import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Company } from '../classes/company';
import { DebuggerService } from '../../common/services/debugger.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlatformidCompanyService {

  private apiURL = 'api/Companies';  // URL to web api

  constructor(
    private http: HttpClient,
    private debugService: DebuggerService) { }

  /** GET Companys from the server */
  getCompanys (): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiURL)
      .pipe(
        tap(Companies => this.log(`fetched Companies`)),
        catchError(this.handleError('getCompanies', []))
      );
  }

  /** GET Company by id. Return `undefined` when id not found */
  getCompanyNo404<Data>(id: number): Observable<Company> {
    const url = `${this.apiURL}/?id=${id}`;
    return this.http.get<Company[]>(url)
      .pipe(
        map(Companies => Companies[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Company id=${id}`);
        }),
        catchError(this.handleError<Company>(`getCompany id=${id}`))
      );
  }

  /** GET Company by id. Will 404 if id not found */
  getCompany(id: number): Observable<Company> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Company>(url).pipe(
      tap(_ => this.log(`fetched Company id=${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  /* GET Companys whose name contains search term */
  searchCompanys(term: string): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty Company array.
      return of([]);
    }
    return this.http.get<Company[]>(`api/Companies/?name=${term}`).pipe(
      tap(_ => this.log(`found Companies matching "${term}"`)),
      catchError(this.handleError<Company[]>('searchCompanies', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Company to the server */
  addCompany (Company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiURL, Company, httpOptions).pipe(
      tap((Company: Company) => this.log(`added Company w/ id=${Company.id}`)),
      catchError(this.handleError<Company>('addCompany'))
    );
  }

  /** DELETE: delete the Company from the server */
  deleteCompany (Company: Company | number): Observable<Company> {
    const id = typeof Company === 'number' ? Company : Company.id;
    const url = `${this.apiURL}/${id}`;

    return this.http.delete<Company>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Company id=${id}`)),
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }

  /** PUT: update the Company on the server */
  updateCompany (Company: Company): Observable<any> {
    return this.http.put(this.apiURL, Company, httpOptions).pipe(
      tap(_ => this.log(`updated Company id=${Company.id}`)),
      catchError(this.handleError<any>('updateCompany'))
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
