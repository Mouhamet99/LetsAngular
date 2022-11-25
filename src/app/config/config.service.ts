import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Config } from './config.component';
@Injectable()
export class ConfigService {
private configUrl: string = 'assets/config.json'

  constructor(private http: HttpClient) { }

  getConfig(){
      return this.http.get<Config>(this.configUrl).pipe(map(response => response))
  }

  getConfigResponse(): Observable<HttpResponse<Config>>{
      return this.http.get<Config>(this.configUrl, {observe:'response'})
  }
}
