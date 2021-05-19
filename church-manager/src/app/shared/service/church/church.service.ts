import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../../constants/url.enum';
import { Church } from '../../model/church.model';
import { Pageable } from '../../model/pageable.model';
@Injectable({
  providedIn: 'root',
})
export class ChurchService {
  constructor(private http: HttpClient) {}

  public getChurchQuantity() {
    return this.http.get(`${URLS.apiRootDsv}church/quantity`);
  }
  public listChurchs(pageable: Pageable) {
    return this.http.get(
      `${URLS.apiRootDsv}church?page=${pageable.page}&size=${pageable.size}&direction=${pageable.direction}&sort=${pageable.sort}`
    );
  }
  public listAllChurchs() {
    return this.http.get(`${URLS.apiRootDsv}church/all`);
  }
  public addChurch(church: Church): Observable<Church> {
    return this.http.post<Church>(`${URLS.apiRootDsv}church`, church);
  }
  public deleteChurch(id: number) {
    return this.http.delete(`${URLS.apiRootDsv}church/${id}`);
  }
  public editChurch(church: Church): Observable<Church> {
    return this.http.put<Church>(`${URLS.apiRootDsv}church`, church);
  }
}
