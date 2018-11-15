import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectRiskOppDepTableComponent} from '../../forms/presales-inputs-form/project-risk-opp-dep-table/project-risk-opp-dep-table.component';
import {ProjectGlobalStatusComponent} from './project-global-status/project-global-status.component';
import {getISOWeek, getWeek} from '../../../../../node_modules/ngx-bootstrap/chronos/units/week';
import {StorageService} from '../../../services/storage-service.service';
import {Apollo} from 'apollo-angular';
import {DashboardService} from '../../../services/dashboard.service';
import {Local} from 'protractor/built/driverProviders';
import {FinancialHealthStatusComponent} from './financial-health-status/financial-health-status.component';
import {ProjectHealthStatusComponent} from './project-health-status/project-health-status.component';
import {baseUrl} from '../../../AppConfig';
import {Http} from '@angular/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit , OnDestroy {
  @ViewChild(FinancialHealthStatusComponent) finHealthComp: FinancialHealthStatusComponent;
  @ViewChild(ProjectHealthStatusComponent) projectHealthComp: ProjectHealthStatusComponent;
  filters = {
    scope : [],
    schedule : [],
    cost :  [],
    resource :  [],
    quality :  [],
    satisfaction :  [],
    projectManager : '',
    projectStatus : '',
    selectedWeek : ''} ;
  constructor(private storage: StorageService , private apollo: Apollo , public dashboardService: DashboardService, private http: Http) { }
 data = [];

  ngOnInit() {
    this.filters = this.dashboardService.filters ;
    this.filters.selectedWeek  = `${getISOWeek(new Date())}`;
    this.filters.projectManager = (this.storage.get('user', null).roles.indexOf('PMO') === -1) ? this.storage.get('user', null).username : null ;
    this.filters.projectStatus = null ;
  }
  applyFilters(){

    this.dashboardService.setFiltredStatusPage();

  }

  ngOnDestroy(): void {
    this.apollo.getClient().resetStore();
  }

  exportDashboard() {
      let url = baseUrl + '/dashboard/export/full?';
      if (this.filters.selectedWeek) {
          url += 'week=' + this.filters.selectedWeek + '&';
      }
      if (this.filters.projectManager) {
          url += 'projectManager=' + this.filters.projectManager + '&';
      }
      if (this.filters.projectStatus) {
          url += 'projectManager=' + this.filters.projectStatus;
      }
      window.location.href = url;
    }
}
