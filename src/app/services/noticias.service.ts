import { Injectable } from '@angular/core';

import { Noticias } from './noticias';
import { NEWS } from './mock-noticias';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticiasURL = '';

  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor() { }

  getNoticias(): Observable<Noticias[]> {
    return of(NEWS);
  }
}
