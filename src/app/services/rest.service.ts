import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Item} from "../model/items.model";
import {ItemsList} from "../model/itemsList";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public resourceUrl = '/api/';

  constructor(protected httpClient: HttpClient) {
  }

  public getItemsListForProcess(id: number): Promise<HttpResponse<Array<Item>>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const httpParams = new HttpParams().set('orderID', id.toString());

    return this.httpClient.get<Array<Item>>('http://localhost:8080/' + 'getItemsListForProcess', {
      headers: httpHeaders,
      params: httpParams,
      observe: 'response'
    }).toPromise();
  }

  public postCompletedItemsListForProcess(items: ItemsList): Promise<HttpResponse<Number>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.post<Number>('http://localhost:8080/' + 'submitCompletedItemsListForProcess', items, {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }

}
