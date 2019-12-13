import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/items.model";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public resourceUrl = '/api/';

  constructor(protected httpClient: HttpClient) {
  }

  public getItemsListForProcess(id: number): Observable<HttpResponse<Item[]>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.get<Item[]>(this.resourceUrl + 'getItemsListForProcess', {
      headers: httpHeaders,
      observe: 'response'
    });
  }

}
