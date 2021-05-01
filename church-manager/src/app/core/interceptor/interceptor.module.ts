import { Store } from '@ngrx/store';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/state';
import { LoadingService } from 'src/app/shared/service/loading/loading.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private store$: Store<AppState>
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.requestStarted();
    if (localStorage.getItem('token') === null) {
      return next.handle(req).pipe(
        catchError((error) => {
          this.loadingService.requestEnded();
          return throwError(error);
        }),
        finalize(() => {
          this.loadingService.requestEnded();
        })
      );
    } else {
      const dupReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });

      return next.handle(dupReq).pipe(
        catchError((error) => {
          this.loadingService.requestEnded();
          return throwError(error);
        }),
        finalize(() => {
          this.loadingService.requestEnded();
        })
      );
    }
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class Interceptor {}