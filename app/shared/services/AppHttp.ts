import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response, Request} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {API_BASE_URL} from "../config/index";
import urljoin = require("url-join");


@Injectable()
export class AppHttp {

  baseUrl: string = API_BASE_URL;

  constructor(private http: Http) {

  }

  request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(this.getUrl(url), options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Object> {

    return this.http.get(this.getUrl(url), options).map((response: Response) => response.json());
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Object> {
    return this.http.post(this.getUrl(url), body, options).map((response: Response) => response.json());;
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Object> {
    return this.http.put(this.getUrl(url), body, options).map((response: Response) => response.json());;
  }


  delete(url: string, options?: RequestOptionsArgs): Observable<Object> {
    return this.http.delete(this.getUrl(url), options).map((response: Response) => response.json());;
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(this.getUrl(url), body, options);
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(this.getUrl(url), options);
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.options(this.getUrl(url), options);
  }

  private getUrl(url: string): string {
    return urljoin(this.baseUrl, url);
  }
}
