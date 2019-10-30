import { Injectable } from '@angular/core';

import { Programas } from './programas';
import { PROGS } from './mock-programas';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  private programasURL = '';

  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor() { }

  getProgramas(): Observable<Programas[]> {
    return of(PROGS);
  }
}
