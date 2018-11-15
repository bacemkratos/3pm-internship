import {Component, OnDestroy, OnInit} from '@angular/core';
import {PresalesFormService} from '../../../services/presales-form.service';
import {Router} from '@angular/router';
import {DashboardService} from '../../../services/dashboard.service';
import {PmoFormService} from '../../../services/pmo-form.service';
import {FinancialFormService} from '../../../services/financial-form.service';
import {StorageService} from '../../../services/storage-service.service';
import {Apollo} from 'apollo-angular';
import {NotificationService} from '../../../services/notification.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  lineChartData = {
    labels: [2013, 2014, 2015, 2016, 2017, 2018],
    series: [
      [40, 10, 33, 18, 27, 45],
      [2, 3, 2, 4, 2, 3]
    ]
  };

    lineChartOption = {
        high: 50,
        low: 0,
        height: '300px',
        showArea: false,
        fullWidth: true,
        axisY: {
            onlyInteger: true,
            showGrid: false,
            offset: 15,
        }
    };

   public projectName = '' ;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string;
  public sortOrder = 'desc';
  projects: any;
  constructor(private presalesService: PresalesFormService, private router: Router ,
              private dashboard: DashboardService , private pmoService: PmoFormService,
              private finService: FinancialFormService , private storage: StorageService ,
              private apollo: Apollo , private notificationService: NotificationService) {
    }

  ngOnInit() {
    this.dashboard.getAllProjects().subscribe( (data: any) => {
     this.projects = data.data.projectsByRole ;
    }
    );
  }

    goToPresalesForm(id: any) {
        this.presalesService.projectId = id;
        this.router.navigate(['/forms/presales-inputs-form']);
        this.storage.set('projectId', id);
    }

    goToPmoForm(id: any) {
        this.pmoService.projectId = id;
        this.router.navigate(['/forms/formPmi']);
        this.storage.set('projectId', id);
    }

    goTofinaForm(id: any) {
        this.pmoService.projectId = id;
        this.router.navigate(['/forms/formFi']);
        this.storage.set('projectId', id);
    }

    onClickAddNewProject() {
        this.presalesService.createProject().subscribe((data: any) => {
            this.presalesService.projectId = data.data.addProject.id;
            this.storage.set('projectId', this.presalesService.projectId);
            // this.notificationService.addNotification({
            //     title: 'Un nouveau Projet a été initié',
            //     message: 'Un nouveau projet a été initié',
            //     projectId: this.presalesService.projectId,
            //     recipients: null,
            //     groups: ['PMO'],
            // }).subscribe();
        } ,
            error1 => {},
          () => this.presalesService.nameProject(this.presalesService.projectId, this.projectName).subscribe(
            data => {
              this.router.navigate(['/forms/presales-inputs-form']);
            }
          )
          );
    }

  ngOnDestroy(): void {
    this.apollo.getClient().resetStore();
  }

}
