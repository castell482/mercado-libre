import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from 'src/app/common/models/search';
import { Description } from 'src/app/common/models/description';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(private httpClient: HttpClient) { }

  getAllItems(): Observable<Search> {
    return this.httpClient.get<Search>(`${environment.apiMercadolibreItems}`);
  }

  getItems(q: string): Observable<Search> {
    return this.httpClient.get<Search>(`${environment.apiMercadolibreItems}?search=${q}`);
  }

  getItem(id: string): Observable<Description> {
    return this.httpClient.get<Description>(`${environment.apiMercadolibreItem}${id}`);
  }

}
