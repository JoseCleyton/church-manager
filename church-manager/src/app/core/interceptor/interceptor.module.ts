import { Store } from '@ngrx/store';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable, NgModule } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/state';
import { LoadingService } from 'src/app/shared/service/loading/loading.service';
import * as fromAlert from '../../state/alert';

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
        catchError((err: HttpErrorResponse) => {
          this.loadingService.requestEnded();
          if (err.status.toString().includes('4')) {
            this.store$.dispatch(
              new fromAlert.actions.AddAlert({
                type: 'error',
                message: 'Credenciais Inválidas',
              })
            );
          }
          if (err.status.toString().includes('5')) {
            this.store$.dispatch(
              new fromAlert.actions.AddAlert({
                type: 'error',
                message: 'Erro Interno. Tente Novamente',
              })
            );
          }
          return throwError(err);
        }),
        finalize(() => {
          this.loadingService.requestEnded();
        })
      );
    } else {
      const dupReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return next.handle(dupReq).pipe(
        catchError((err) => {
          this.loadingService.requestEnded();
          if (err.status.toString().includes('4')) {
            this.store$.dispatch(
              new fromAlert.actions.AddAlert({
                type: 'error',
                message: 'Credenciais Inválidas',
              })
            );
          }
          if (err.status.toString().includes('5')) {
            this.store$.dispatch(
              new fromAlert.actions.AddAlert({
                type: 'error',
                message: 'Erro Interno. Tente Novamente',
              })
            );
          }
          return throwError(err);
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
