import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../../constants/url.enum';
import { Christian } from '../../model/christian.model';
import { Pageable } from '../../model/pageable.model';

@Injectable({
  providedIn: 'root',
})
export class ChristianService {
  constructor(private http: HttpClient) {}

  public listChristians(filters: any, pageable: Pageable) {
    return this.http.get<any>(
      `${URLS.apiRootDsv}christian?name=${filters.name}&monthOfBirthday=${filters.monthOfBirthday}&page=${pageable.page}&size=${pageable.size}&direction=${pageable.direction}&sort=${pageable.sort}`
    );
  }
  public getQuantityChristians() {
    return this.http.get(`${URLS.apiRootDsv}christian/quantity`);
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
