import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { URLS } from '../../constants/url.enum';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  public authenticate(user: any): Observable<any> {
    return this.http.post(`${URLS.apiRootPro}auth/token`, user);
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token') === null) {
      this.router.navigateByUrl('login');
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('login');
    this.router.navigateByUrl('');
  }
}
