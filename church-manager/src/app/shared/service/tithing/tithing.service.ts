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

  public fetchLatestRecords() {
    return this.http.get(`${URLS.apiRootDsv}tithing/latest-records`);
  }

  public listTithings(idChurch: number, dateStart: string, dateEnd: string) {
    return this.http.get(
      `${URLS.apiRootDsv}tithing/${idChurch}?dateStart=${dateStart}&dateEnd=${dateEnd}`
    );
  }
  public getTotal() {
    return this.http.get(`${URLS.apiRootDsv}tithing/total`);
  }
  public addTithing(tithing: Tithing): Observable<Tithing> {
    return this.http.post<Tithing>(`${URLS.apiRootDsv}tithing`, tithing);
  }
}
