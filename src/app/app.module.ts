import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import {AuthenticationService, AuthGuardService} from './services/authentication-service.service';
import {StorageService} from './services/storage-service.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthIntercepterService} from './services/auth-intercepter.service';
import { StatusComponent } from './pages/dashboard/status/status.component';
import {DashboardService} from './services/dashboard.service';
import {ApolloModule} from 'apollo-angular';
import {client} from './myGqlApolloClient';
import {PresalesFormService} from './services/presales-form.service';
import {PmoFormService} from './services/pmo-form.service';
import {FinancialFormService} from './services/financial-form.service';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ApolloModule.forRoot(client)
  ],
  providers: [ AuthenticationService, AuthGuardService, StorageService, DashboardService, PresalesFormService,
    PmoFormService , FinancialFormService, NotificationService,
    { provide: LocationStrategy, useClass: PathLocationStrategy } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercepterService ,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
