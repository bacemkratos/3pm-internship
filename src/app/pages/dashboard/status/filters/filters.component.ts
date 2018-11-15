import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DashboardService} from '../../../../services/dashboard.service';
import {getISOWeek} from 'ngx-bootstrap/chronos/units/week';
import {StorageService} from '../../../../services/storage-service.service';







@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  projectManagersList = [] ;
  projectStatusList= [ 'Completed', 'In Progress' , 'Halt'] ;
  weeksList = Array(52).fill(1).map((x, i) => `${i + 1}`);
  @Output() applyF = new EventEmitter<boolean>();
  // filtres
  @Input()
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
  constructor(private dashBoardService: DashboardService , private storage: StorageService) { }

  ngOnInit() {
    this.dashBoardService.getAllpms().subscribe(
      (data: any) => {
        data.data.allUser.forEach(value => this.projectManagersList.push(value.username) );

      } , error1 => {}
    );
  }

  resetFilter(){
   this.filters = {
      scope : ['good', 'issue', 'risk'],
      schedule : ['good', 'issue', 'risk'],
      cost :  ['good', 'issue', 'risk'],
      resource :  ['good', 'issue', 'risk'],
      quality :  ['good', 'issue', 'risk'],
      satisfaction :  ['good', 'issue', 'risk'],
      projectManager : null ,
      projectStatus : 'Completed',
      selectedWeek : `${getISOWeek(new Date())}`} ;
   this.dashBoardService.setStatusPage();
  }
  clickOnFiltre(stat: string , filtre: string[]){
    if (filtre.indexOf(stat) >= 0)
    {
      filtre.splice(filtre.indexOf(stat) , 1) ;
    }else {
      filtre.push(stat);
    }
  }
  checkStateInFiltre(stat: string , filtre: string[])
  {
 return filtre.indexOf(stat) >= 0  ;
  }
  applyFilter() {

    this.applyF.emit(true);
  }
}
