import {Component, Input, OnInit} from '@angular/core';
import {DashboardService} from '../../../../services/dashboard.service';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';

declare var $: any;

@Component({
  selector: 'app-financial-health-status',
  templateUrl: './financial-health-status.component.html',
  styleUrls: ['./financial-health-status.component.css', '../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class FinancialHealthStatusComponent implements OnInit {



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
  financialHealth = {
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
  defaultFinancialHealth = this.financialHealth;
  cloneFinHealth = this.financialHealth;
  editingField = 'nothing';
  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
  }
  // i am using JSON.parse(JSON.stringify()) cause angular works with pass-by-reference on non primitive types, so if u assign it directly u will get the same object reference.
  loadFinancialHealthData(projectId: number) {
    // + operator converts string to int
    this.dashboardService.getProjectFinancialHealth(projectId, +this.dashboardService.filters.selectedWeek).subscribe(
      (resp: any) => {
          this.financialHealth = JSON.parse(JSON.stringify(resp.data.health));
          this.cloneFinHealth = JSON.parse(JSON.stringify(this.financialHealth));
          // sorry, back end insisted on this
          if (resp.data.health.id === 0) {
            this.dashboardService.addProjectFinancialHealth(this.cloneFinHealth).subscribe(
              (resp2: any) => {
                this.dashboardService.resetStore();
                this.loadFinancialHealthData(projectId);
              }
            );
          }
      },
      (err: any) => {
        this.dashboardService.addProjectFinancialHealth(this.defaultFinancialHealth).subscribe(
          (resp2: any) => {
            this.dashboardService.resetStore();
            this.loadFinancialHealthData(projectId);
          }
        );
      }
    );
  }
  editFinancialHealth() {
    this.cloneFinHealth = JSON.parse(JSON.stringify(this.financialHealth));
  }
  save() {
    this.dashboardService.editProjectFinancialHealth(this.cloneFinHealth).subscribe(
      (resp: any) => {
        this.financialHealth = JSON.parse(JSON.stringify(this.cloneFinHealth));
        this.triggerToast('Edit', 'Changes saved.', 'success');
        this.dashboardService.resetStore();
      },
      () => this.triggerToast('Edit', 'Error saving changes.', 'error')
    );
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
