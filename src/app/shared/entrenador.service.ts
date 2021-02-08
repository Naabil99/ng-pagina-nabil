import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { entrenador } from './entrenador';

@Injectable({
  providedIn: 'root'
})
export class entrenadorService {
  private entrenadorsUrl = 'api/entrenadors';

  constructor(private http: HttpClient) { }

  getentrenadors(): Observable<entrenador[]> {
    return this.http.get<entrenador[]>(this.entrenadorsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxentrenadorId(): Observable<entrenador> {
    return this.http.get<entrenador[]>(this.entrenadorsUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getentrenadorById(id: number): Observable<entrenador> {
    const url = `${this.entrenadorsUrl}/${id}`;
    return this.http.get<entrenador>(url)
      .pipe(
        tap(data => console.log('getentrenador: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createentrenador(entrenador: entrenador): Observable<entrenador> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    entrenador.id = null;
    return this.http.post<entrenador>(this.entrenadorsUrl, entrenador, { headers: headers })
      .pipe(
        tap(data => console.log('createentrenador: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteentrenador(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.entrenadorsUrl}/${id}`;
    return this.http.delete<entrenador>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteentrenador: ' + id)),
        catchError(this.handleError)
      );
  }

  updateentrenador(entrenador: entrenador): Observable<entrenador> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.entrenadorsUrl}/${entrenador.id}`;
    return this.http.put<entrenador>(url, entrenador, { headers: headers })
      .pipe(
        tap(() => console.log('updateentrenador: ' + entrenador.id)),
        // Return the entrenador on an update
        map(() => entrenador),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
