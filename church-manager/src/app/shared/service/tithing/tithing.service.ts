import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../../constants/url.enum';
import { Tithing } from '../../model/tithing.model';

@Injectable({
  providedIn: 'root',
})
export class TithingService {
  constructor(private http: HttpClient) {}

  public listTithings(dateStart: string, dateEnd: string) {
    return this.http.get(`${URLS.apiRootDsv}tithing?dateStart=${dateStart}&dateEnd=${dateEnd}`);
  }
  public getTotal() {
    return this.http.get(`${URLS.apiRootDsv}tithing/total`);
  }
  public addTithing(tithing: Tithing): Observable<Tithing> {
    return this.http.post<Tithing>(`${URLS.apiRootDsv}tithing`, tithing);
  }
}
