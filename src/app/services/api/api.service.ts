import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  public get(url, options?): Observable<any>  {
    const params = this.buildOption(options);
    return this._http.get(this.getBaseUrl(url), params);
  }

  public post(url, body, options?): Observable<any>  {
    const params = this.buildOption(options);
    return this._http.post(this.getBaseUrl(url), body, params);
  }

  private getBaseUrl(url): string {
    return `${environment.api}${url}`;
  }

  private buildOption(options): {params} {
    let params = new HttpParams();
    for (const prop in options) {
      if (options[prop]) {
        params = params.append(prop, options[prop]);
      }
    }
    return {params: params};
  }
}
