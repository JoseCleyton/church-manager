import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../../constants/url.enum';
import { Christian } from '../../model/christian.model';

@Injectable({
  providedIn: 'root',
})
export class ChristianService {
  constructor(private http: HttpClient) {}

  public listChristians() {
    return this.http.get(`${URLS.apiRootDsv}christian`);
  }
  public addChristian(christian: Christian): Observable<Christian> {
    return this.http.post<Christian>(`${URLS.apiRootDsv}christian`, christian);
  }
  public deleteChristian(id: number) {
    return this.http.delete(`${URLS.apiRootDsv}christian/${id}`);
  }
  public editChristian(christian: Christian): Observable<Christian> {
    return this.http.put<Christian>(`${URLS.apiRootDsv}christian`, christian);
  }
}
