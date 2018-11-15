import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-title',
  template: '<ng-content></ng-content>',
})
export class TitleComponent {

  constructor(private router: Router, public route: ActivatedRoute, private titleService: Title) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        let currentRoute = this.route.root;
        let title = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
              if (routes.outlet === 'primary') {
              title = routes.snapshot.data.heading;
              currentRoute = routes;
            }
          });
        } while (currentRoute);
        if (title) {
          this.titleService.setTitle( '3PM / ' + title );
        } else {
          this.titleService.setTitle('3PM');
        }
      });
  }
}
