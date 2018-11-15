import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';
import {AuthGuardService} from './services/authentication-service.service';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: '',
  component: AdminLayoutComponent,
    canActivate: [AuthGuardService] ,
  children: [
    {
      path: '3pm',
      redirectTo: 'dashboard/home',
      pathMatch: 'full' ,
        },
    {
      path: 'dashboard/home',
      loadChildren: './pages/dashboard/home/home.module#HomeModule'
    },
    {
      path: 'dashboard/status',
      loadChildren: './pages/dashboard/status/status.module#StatusModule'
    }
        , {
      path: 'dashboard/modern',
      loadChildren: './pages/dashboard/dashboard-modern/dashboard-modern.module#DashboardModernModule'
    }, {
      path: 'dashboard/clean',
      loadChildren: './pages/dashboard/dashboard-clean/dashboard-clean.module#DashboardCleanModule'
    }, {
      path: 'dashboard/analytical',
      loadChildren: './pages/dashboard/dashboard-analytical/dashboard-analytical.module#DashboardAnalyticalModule'
    }, {
      path: 'calendar',
      loadChildren: './pages/calendar/calendar.module#CalendarModule'
    }, {
      path: 'widgets',
      loadChildren: './pages/widgets/widgets.module#WidgetsModule'
    }, {
      path: 'extra-pages/pricing',
      loadChildren: './pages/extra-pages/pricing/pricing.module#PricingModule'
    }, {
      path: 'extra-pages/gallery',
      loadChildren: './pages/extra-pages/gallery/gallery.module#GalleryModule'
    }, {
      path: 'extra-pages/invoice',
      loadChildren: './pages/extra-pages/invoice/invoice.module#InvoiceModule'
    }, {
      path: 'extra-pages/animations',
      loadChildren: './pages/extra-pages/animations/animations.module#AnimationsModule'
    }, {
      path: 'extra-pages/blank-starter',
      loadChildren: './pages/extra-pages/blank-starter/blank-starter.module#BlankStarterModule'
    }, {
      path: 'extra-pages/blank-page',
      loadChildren: './pages/extra-pages/blank-page/blank-page.module#BlankPageModule'
    }, {
      path: 'extra-pages/search',
      loadChildren: './pages/extra-pages/search/search.module#SearchModule'
    }, {
      path: 'extra-pages/custom-scroll',
      loadChildren: './pages/extra-pages/custom-scroll/custom-scroll.module#CustomScrollModule'
    }, {
      path: 'extra-pages/user-profile',
      loadChildren: './pages/extra-pages/user-profile/user-profile.module#UserProfileModule'
    }, {
      path: 'map',
      loadChildren: './pages/map/map.module#MapModule'
    }, {
      path: 'icons/simple',
      loadChildren: './pages/icons/simple/simple.module#SimpleModule'
    }, {
      path: 'icons/font-awesome',
      loadChildren: './pages/icons/font-awesome/font-awesome.module#FontAwesomeModule'
    }, {
      path: 'charts',
      loadChildren: './pages/charts/charts.module#ChartsModule'
    }, {
      path: 'tables',
      loadChildren: './pages/tables/tables.module#TablesModule'
    }, {
      path: 'forms',
      loadChildren: './pages/forms/forms.module#FormsModule'
    }, {
      path: 'e-commerce',
      loadChildren: './pages/e-commerce/e-commerce.module#ECommerceModule'
    }, {
      path: 'inbox',
      loadChildren: './pages/inbox/inbox.module#InboxModule'
    }, {
      path: 'ui-element',
      loadChildren: './pages/ui-element/ui-element.module#UiElementModule'
    } ,
    {
      path: 'account',
      loadChildren: './pages/account/account.module#AccountModule'
    },
    {
      path: 'notifications',
      loadChildren: './pages/notifications/notifications.module#NotificationsModule'

    }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'register',
      loadChildren: './pages/extra-pages/register/register.module#RegisterModule'
    }, {
      path: 'login',
      loadChildren: './pages/extra-pages/login/login.module#LoginModule'
    }, {
      path: 'recover-password',
      loadChildren: './pages/extra-pages/recover-password/recover-password.module#RecoverPasswordModule'
    }, {
      path: 'lock-screen',
      loadChildren: './pages/extra-pages/lock-screen/lock-screen.module#LockScreenModule'
    }, {
      path: 'error',
      loadChildren: './pages/extra-pages/error/error.module#ErrorModule'
    }
  ]
}];
