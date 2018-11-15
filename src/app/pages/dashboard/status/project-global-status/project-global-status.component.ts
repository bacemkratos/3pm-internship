import {Component, Input, OnInit} from '@angular/core';
import {getWeek} from '../../../../../../node_modules/ngx-bootstrap/chronos/units/week';
import {DashboardService} from '../../../../services/dashboard.service';
import {StorageService} from '../../../../services/storage-service.service';

declare var $: any;


interface GlobalStatusModel {
  _id: string;
  projectId: string;
  scopeStatus: string;
  costStatus: string;
  scheduleStatus: string;
  resourceStatus: string;
  qualityStatus: string;
  satisfactionStatus: string;
  project: {
    projectName: string;
  };
}

@Component({
  selector: 'app-project-global-status',
  templateUrl: './project-global-status.component.html',
  styleUrls: ['./project-global-status.component.css', '../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class ProjectGlobalStatusComponent implements OnInit {


  tempStatus: GlobalStatusModel = {
    _id: '',
    projectId: '',
    scopeStatus: '',
    costStatus: '',
    scheduleStatus: '',
    resourceStatus: '',
    qualityStatus: '',
    satisfactionStatus: '',
    project: {
      projectName: ''
    }
  };
  statusList = ['good', 'issue', 'risk'];
  selectedStatusWeek;
  selectedIndex;
  operation = 'ADD';
  data = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  items: GlobalStatusModel[] = [];

  constructor(private service: DashboardService, private storage: StorageService) {
  }

  ngOnInit() {
    this.sortBy =  (this.storage.get('user', null).roles.indexOf('AM') !== -1) ?  'date' : '';
    this.service.setStatusPage();
    this.data = this.service.projectsList;
    this.items = this.service.scopesList;
  }

  openDialog(item: GlobalStatusModel) {
    this.operation = 'ADD';
    this.selectedIndex = this.items.indexOf(item);
    this.tempStatus = JSON.parse(JSON.stringify(item));
    this.selectedStatusWeek = this.service.filters.selectedWeek;
    if (item.resourceStatus !== '') {
      this.operation = 'EDIT';
    }
  }

  closeDialog() {
    this.tempStatus = {
      _id: '',
      projectId: '',
      scopeStatus: '',
      costStatus: '',
      scheduleStatus: '',
      resourceStatus: '',
      qualityStatus: '',
      satisfactionStatus: '',
      project: {
        projectName: ''
      }
    };
    this.operation = 'ADD';


  }


  saveStatus() {
    if (this.operation === 'EDIT') {
      this.service.saveStatus(this.tempStatus).subscribe(
        (data: any) => {
          let aux: any;
          aux = JSON.parse(JSON.stringify(data.data.editGlobalStatus));
          aux.project = {projectName: this.tempStatus.project.projectName};
          this.items.splice(this.selectedIndex, 1, aux);
          this.triggerToast('Global Status', 'Global Status Has been updated', 'success');
        }, error1 => {
          this.triggerToast('Global Status', `Global Status Hasn\'t been updated due to the following ${error1}`, 'error');
        }
      );
    } else if (this.operation === 'ADD') {
      this.service.addStatus(this.tempStatus).subscribe(
        (data: any) => {
          let aux: any;
          aux = JSON.parse(JSON.stringify(data.data.addGlobalStatus));
          aux.project = {projectName: this.tempStatus.project.projectName};
          this.items.splice(this.selectedIndex, 1, aux);
          this.triggerToast('Global Status', 'Global Status Has been Added', 'success');
        }, error1 => {
          this.triggerToast('Global Status', `Global Status Hasn\'t been Added due to the following ${error1}`, 'error');
        }
      );

    }
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
