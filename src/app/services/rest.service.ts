import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Item} from '../model/items.model';
import {ItemsList} from '../model/itemsList';
import {Observable} from 'rxjs';

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

    return this.httpClient.get<Array<Item>>('https://hakatonmmm.herokuapp.com/' + 'getItemsListForProcess', {
      headers: httpHeaders,
      params: httpParams,
      observe: 'response'
    }).toPromise();
  }

  public postCompletedItemsListForProcess(items: ItemsList): Promise<HttpResponse<number>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.post<number>('https://hakatonmmm.herokuapp.com/' + 'submitCompletedItemsListForProcess', items, {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }

  public inputCsvFile(file: File) {
    const httpHeaders = new HttpHeaders({
      'Cache-Control': 'no-cache'
    });

    const data = new FormData();
    data.append('file', file, file.name);

    console.log(file.size);
    console.log(file.name);

    return this.httpClient.post('https://hakatonmmm.herokuapp.com/' + 'input-csv', data, {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }


  public getAllAvailableCheckedProcess(): Promise<HttpResponse<Array<ItemsList>>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.get<Array<ItemsList>>('https://hakatonmmm.herokuapp.com/' + 'allAvailableCheckedProcess', {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }

  public generateReport(items: ItemsList): Promise<HttpResponse<Blob>> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    return this.httpClient.post<Blob>('https://hakatonmmm.herokuapp.com/' + 'generateReport', items, {
      headers: httpHeaders,
      observe: 'response'
    }).toPromise();
  }
}
