import { FeatureModule } from './feature/feature.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { AuthGuardGuard } from './core/auth/auth-guard.guard';
import { Interceptor } from './core/interceptor/interceptor.module';
import { LoadingService } from './shared/service/loading/loading.service';
import { LoadingComponent } from './shared/components/ui/loading/loading.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    FeatureModule,
    HttpClientModule,
    StateModule,
    Interceptor,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [AuthGuardGuard, LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
