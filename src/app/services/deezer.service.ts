import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  url: string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': 'Accept' 
    })
  }

  getTrack(search: string): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.url + 'tracks/' + search)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
