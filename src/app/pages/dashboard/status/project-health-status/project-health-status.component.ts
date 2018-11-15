import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../../services/dashboard.service';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';

declare var $: any;
@Component({
  selector: 'app-project-health-status',
  templateUrl: './project-health-status.component.html',
  styleUrls: ['./project-health-status.component.css']
})
export class ProjectHealthStatusComponent implements OnInit {


  selectedProjectID ;
  selectedProjectScope = {
    _id: '' ,
    projectId: '' ,
    scopeStatus: '' ,
    costStatus: '' ,
    scheduleStatus: '',
    resourceStatus: '' ,
    qualityStatus: '' ,
    satisfactionStatus: '' ,
    project: {
      projectName: ''
    }
  };
  projectHealth = {
    id: -1,
    projectId: -1,
    date: '',
    totalSaleValue: 0.0,
    crValue: 0.0,
    currentPayment: 0.0,
    currentDelivery: 0.0,
    plannedToDeliver: 0.0,
    currentExpense: 0.0,
    plannedExpense: 0.0,
    currentMarge: 0.0,
    initialMarge: 0.0,
    plannedMarge: 0.0,
    initialEndDate: '1234-11-11 00:00:00',
    plannedEndDate: '1234-11-11 00:00:00',
    healthStatus: '',
    plannedAction: ''
  };
  defaultProjectHealth = this.projectHealth;
  cloneProjectHealth = this.projectHealth;
  editingField = 'nothing';
  constructor( public dashboardService: DashboardService ) { }

  ngOnInit() {

  }
  saveIndex(i)
  {
    this.dashboardService.selectedProjectIndex = i ;
  }
  getrelatedScope(){
    this.selectedProjectID = this.dashboardService.projectsList[this.dashboardService.selectedProjectIndex].id;
    this.dashboardService.scopesList.forEach((value: any) => {
      if (value.projectId === this.selectedProjectID) {
        this.selectedProjectScope = value ;
        return;
      }}
    );
  }

  loadProjectHealthData(projectId: any) {
    // + operator converts string to int
    this.dashboardService.getProjectFinancialHealth(projectId, +this.dashboardService.filters.selectedWeek).subscribe(
      (resp: any) => {
        this.projectHealth = JSON.parse(JSON.stringify(resp.data.health));
        this.cloneProjectHealth = JSON.parse(JSON.stringify(this.projectHealth));
        // sorry, back end insisted on this
        if (resp.data.health.id === 0) {
          this.dashboardService.addProjectFinancialHealth(this.cloneProjectHealth).subscribe(
            (resp2: any) => {
              this.dashboardService.resetStore();
              this.loadProjectHealthData(projectId);
            }
          );
        }
      },
      (err: any) => {
        this.dashboardService.addProjectFinancialHealth(this.defaultProjectHealth).subscribe(
          (resp2: any) => {
            this.dashboardService.resetStore();
            this.loadProjectHealthData(projectId);
          }
        );
      }
    );
  }

  editHealth() {
    this.cloneProjectHealth = JSON.parse(JSON.stringify(this.projectHealth));
  }

  saveHealth() {
    this.dashboardService.editProjectHealth(this.cloneProjectHealth).subscribe(
      (resp: any) => {
        this.projectHealth = JSON.parse(JSON.stringify(this.cloneProjectHealth));
        this.triggerToast('Edit', 'Changes saved.', 'success');
        this.dashboardService.resetStore();
      },
      () => this.triggerToast('Edit', 'Error saving changes.', 'error')
    );
  }
  triggerToast(heading: string, text: string, icon: string) {
    $.toast({
      heading: heading,
      text: text,
      position: 'top-right',
      loaderBg: '#ff6849',
      icon: icon,
      hideAfter: 5000,
      stack: 6,
      loader: false
    });
  }
}
