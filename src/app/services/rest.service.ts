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

  public getItemsListForProcess(id: number): Promise<HttpResponse<Array<Item>>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.get<Array<Item>>(this.resourceUrl + 'getItemsListForProcess', {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }

  public postCompletedItemsListForProcess(items: Item[]): Promise<HttpResponse<Number>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.post<Number>(this.resourceUrl + 'postCompletedItemsListForProcess', items, {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }

}
