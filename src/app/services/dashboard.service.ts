import {Injectable, Input} from '@angular/core';
import {DashboardProject} from '../models/DashboardProject';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


 export interface GlobalStatusModel{
   _id: string ;
   projectId: string ;
   scopeStatus: string ;
   costStatus: string ;
   scheduleStatus: string;
   resourceStatus: string ;
   qualityStatus: string ;
   satisfactionStatus: string ;
   project: {
     projectName: string;
   };
}
@Injectable()
export class DashboardService {

  filters = {
    scope : ['good', 'issue', 'risk'],
    schedule : ['good', 'issue', 'risk'],
    cost : ['good', 'issue', 'risk'],
    resource :  ['good', 'issue', 'risk'],
    quality :  ['good', 'issue', 'risk'],
    satisfaction :  ['good', 'issue', 'risk'],
    projectManager : '',
    projectStatus : '',
    selectedWeek : ''} ;
  projectsList= [];
  scopesList: GlobalStatusModel[] = [];

  selectedProjectIndex = 0 ;
  selectedProjectID = '0';

  constructor(private apollo: Apollo) {

  }
// this method bring all projexts and all status
 setStatusPage(){
   this.scopesList.splice(0, this.scopesList.length);
   this.projectsList.splice(0, this.scopesList.length);
  this.getAllProjects().subscribe(
     (data: any) => {
       data.data.projectsByRole.forEach(value => this.projectsList.push(value));
     } , error1 => {} , () =>
       this.projectsList.forEach(value =>
         {


           this.getGlobalStatusByproject( parseInt(value.id, 10), parseInt(this.filters.selectedWeek, 10)).subscribe(
             (data: any) => {
                if (data.data.globalStatus !== null)
               {

                  const val = JSON.parse(JSON.stringify(data.data.globalStatus)) ;
                 val.project = { projectName: value.projectName };
                 this.scopesList.push(val);

                 // data.data.globalStatus.forEach( val => {
                 //
                 //   val.project = { projectName: value.projectName } ;
                 // this.scopesList.push(val); }) ;
               }else{

                  this.scopesList.push(
                    {
                      _id: '' ,
                      projectId:  value.id  ,
                      scopeStatus: '' ,
                      costStatus: '' ,
                      scheduleStatus: '',
                      resourceStatus: '' ,
                      qualityStatus: '' ,
                      satisfactionStatus: '' ,
                      project: {
                        projectName: value.projectName
                }
                    }
                  );
                }

             }
           );

         }
       )
   );
 }
  setFiltredStatusPage(){
 this.apollo.getClient().resetStore();
    this.scopesList.splice(0, this.scopesList.length);
  this.getFiltredStatus().subscribe(
    (data: any) => {
       data.data.filters.forEach(value => {
         this.scopesList.push(value.filtredStatus[0]) ;
       });
    } ,
    error1 => {} ,
    () => {
       this.projectsList.splice(0, this.projectsList.length) ;
           this.scopesList.forEach(
             value => {
                this.getFiltredProjects(value.projectId).subscribe(
                  (data: any) => {
                     this.projectsList.push(data.data.project) ;
                  }
                );
             }
           );
    }
  );

  }

   getAllProjects(){

 this.projectsList = [ ];
    return this.apollo.query({query: gql` { projectsByRole{
   id , projectName, projectCode ,contractualEndDate ,AccountManager ,projectSaleValue ,currentBilled ,plannedToBill, initialPMOprojectCosts, initialPMOmanDayAffectation,
   initialPMOtargetProfitability, initialPMOthresholdProfitability, approvedPMOprojectCosts, approvedPMOmanDayAffectation, approvedPMOtargetProfitability, approvedPMOthresholdProfitability
 }}`}) ;
  }
  getFiltredProjects(id: any){


    return this.apollo.query({query: gql` query get($id:Int) {project(id:$id){
   id , projectName, projectCode ,contractualEndDate ,AccountManager ,projectSaleValue ,currentBilled ,plannedToBill
}
}`,
  variables: {
      id: parseInt(id, 10)
  }    }

 ) ;
  }
   getAllpms(){
     return this.apollo.query({query: gql`query {
allUser {
  username
}
}`}) ;
   }
  getGlobalStatusByproject(id: any , week: number){
    return this.apollo.query({query: gql`query get($pid:Int ,$week:Int){
globalStatus(projectId:$pid , selectedWeek:$week) {
 _id
 date
  projectId
  scopeStatus
  costStatus
  scheduleStatus
  resourceStatus
  qualityStatus
  satisfactionStatus

}
}` ,
    variables: {
      pid: id ,
      week: week
    }}) ;
  }
  saveStatus(item: GlobalStatusModel)
  {
    return this.apollo.mutate({mutation: gql`mutation add($id: Int,
$scopeStatus: String,
$costStatus: String,
$scheduleStatus: String,
$resourceStatus: String,
$qualityStatus: String,
$satisfactionStatus: String,
)
{

  editGlobalStatus(id:$id
scopeStatus: $scopeStatus
costStatus:$costStatus
scheduleStatus: $scheduleStatus
resourceStatus: $resourceStatus
qualityStatus: $qualityStatus
satisfactionStatus:$satisfactionStatus
)
  {_id,date,projectId,scopeStatus,costStatus,scheduleStatus,resourceStatus
,qualityStatus,satisfactionStatus }
}` ,
      variables: {
       id: item._id ,
        scopeStatus:  item.scopeStatus,
        costStatus: item.costStatus ,
        scheduleStatus: item.scheduleStatus ,
        resourceStatus: item.resourceStatus ,
        qualityStatus: item.qualityStatus ,
        satisfactionStatus: item.satisfactionStatus ,

      }}) ;
  }
  addStatus(item: GlobalStatusModel)
  {
    return this.apollo.mutate({mutation: gql`mutation add($date: DateTime,
$scopeStatus: String,
$costStatus: String,
$scheduleStatus: String,
$resourceStatus: String,
$qualityStatus: String,
$satisfactionStatus: String,
$projectId: Int)
{

  addGlobalStatus(date: $date
scopeStatus: $scopeStatus
costStatus:$costStatus
scheduleStatus: $scheduleStatus
resourceStatus: $resourceStatus
qualityStatus: $qualityStatus
satisfactionStatus:$satisfactionStatus
projectId: $projectId)
  {_id,date,projectId,scopeStatus,costStatus,scheduleStatus,resourceStatus
,qualityStatus,satisfactionStatus }
}` ,
      variables: {
        date: this.formatDate(new Date()),
        scopeStatus:  item.scopeStatus,
        costStatus: item.costStatus ,
        scheduleStatus: item.scheduleStatus ,
        resourceStatus: item.resourceStatus ,
        qualityStatus: item.qualityStatus ,
        satisfactionStatus: item.satisfactionStatus ,
        projectId: item.projectId
    }}) ;
  }
  getFiltredStatus(){

    return this.apollo.query({query: gql`
query
  fitlreData(
   $projectManager:String ,
$projectStatus: String,
$selectedWeek: Int,
$scopeStatus: [String],
$scheduleStatus: [String],
$costStatus: [String],
$resourceStatus: [String],
$qualityStatus: [String],
$satisfactionStatus: [String] ,  )
  {
   filters(
    projectManager:   $projectManager,
projectStatus:$projectStatus,
selectedWeek: $selectedWeek,
scopeStatus: $scopeStatus,
scheduleStatus: $scheduleStatus,
costStatus:$costStatus,
resourceStatus:$resourceStatus,
qualityStatus:$qualityStatus,
satisfactionStatus:$satisfactionStatus,
  )
    {
      filtredStatus{_id,projectId,scopeStatus
    ,costStatus,scheduleStatus,resourceStatus,qualityStatus,
      satisfactionStatus,project {
       projectName
      }}
    }
  }
` ,
      variables: {
        projectManager: this.filters.projectManager,
        projectStatus: null,
        selectedWeek: parseInt( this.filters.selectedWeek, 10),
        scopeStatus: this.filters.scope,
        scheduleStatus: this.filters.schedule,
        costStatus: this.filters.cost,
        resourceStatus: this.filters.resource,
        qualityStatus: this.filters.quality,
        satisfactionStatus: this.filters.satisfaction
      }}) ;
  }
  getProjectFinancialHealth(projectId: number, selectedWeek: number) {
    const quer = gql`query($projectId: Int, $selectedWeek: Int){
      health(projectId: $projectId, selectedWeek: $selectedWeek){
        id, totalSaleValue, crValue, currentPayment, currentDelivery, plannedToDeliver, currentExpense, plannedExpense,
        currentMarge, initialMarge, plannedMarge, initialEndDate, plannedEndDate, healthStatus, plannedAction
      }
    }`;
    return this.apollo.query({
      query: quer,
      variables: {
        projectId: projectId,
        selectedWeek: selectedWeek
      }
    });
  }
  editProjectFinancialHealth(health: any) {
    const quer = gql`mutation($id: Int, $totalSaleValue: Float, $crValue: Float, $currentPayment: Float, $currentDelivery: Float,
        $plannedToDeliver: Float, $currentExpense: Float, $plannedExpense: Float,
        $currentMarge: Float, $initialMarge: Float, $plannedMarge: Float){
          editHealth(id: $id, totalSaleValue: $totalSaleValue, crValue: $crValue, currentPayment: $currentPayment, currentDelivery: $currentDelivery,
          plannedToDeliver: $plannedToDeliver, currentExpense: $currentExpense, plannedExpense: $plannedExpense,
          currentMarge: $currentMarge, initialMarge: $initialMarge, plannedMarge: $plannedMarge){
            id, totalSaleValue, crValue, currentPayment, currentDelivery, plannedToDeliver, currentExpense, plannedExpense,
            currentMarge, initialMarge, plannedMarge
          }
    }`;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        id: health.id,
        totalSaleValue: health.totalSaleValue,
        crValue: health.crValue,
        currentPayment: health.currentPayment,
        currentDelivery: health.currentDelivery,
        plannedToDeliver: health.plannedToDeliver,
        currentExpense: health.currentExpense,
        plannedExpense: health.plannedExpense,
        currentMarge: health.currentMarge,
        initialMarge: health.initialMarge,
        plannedMarge: health.plannedMarge
      }
    });
  }
  addProjectFinancialHealth(health: any) {
    const quer = gql`mutation($projectId: Int, $date: DateTime $totalSaleValue: Float, $crValue: Float, $currentPayment: Float, $currentDelivery: Float,
        $plannedToDeliver: Float, $currentExpense: Float, $plannedExpense: Float,
        $currentMarge: Float, $initialMarge: Float, $plannedMarge: Float, $initialEndDate: String, $plannedEndDate: String, $healthStatus: String, $plannedAction: String){
          addHealth(projectId: $projectId, date: $date totalSaleValue: $totalSaleValue, crValue: $crValue, currentPayment: $currentPayment, currentDelivery: $currentDelivery,
          plannedToDeliver: $plannedToDeliver, currentExpense: $currentExpense, plannedExpense: $plannedExpense,
          currentMarge: $currentMarge, initialMarge: $initialMarge, plannedMarge: $plannedMarge, initialEndDate: $initialEndDate,
          plannedEndDate: $plannedEndDate, healthStatus: $healthStatus, plannedAction: $plannedAction){
            id, totalSaleValue, crValue, currentPayment, currentDelivery, plannedToDeliver, currentExpense, plannedExpense,
            currentMarge, initialMarge, plannedMarge, initialEndDate, plannedEndDate, healthStatus, plannedAction
          }
    }`;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        projectId: this.projectsList[this.selectedProjectIndex].id,
        date: this.formatDate(new Date),
        totalSaleValue: health.totalSaleValue,
        crValue: health.crValue,
        currentPayment: health.currentPayment,
        currentDelivery: health.currentDelivery,
        plannedToDeliver: health.plannedToDeliver,
        currentExpense: health.currentExpense,
        plannedExpense: health.plannedExpense,
        currentMarge: health.currentMarge,
        initialMarge: health.initialMarge,
        plannedMarge: health.plannedMarge,
        initialEndDate: health.initialEndDate,
        plannedEndDate: health.plannedEndDate,
        healthStatus: health.healthStatus,
        plannedAction: health.plannedAction
      }
    });
  }
  editProjectHealth(health: any) {
    const quer = gql`mutation($id: Int, $currentPayment: Float, $currentDelivery: Float, $currentExpense: Float, $plannedExpense: Float,
        $initialEndDate: String, $plannedEndDate: String, $healthStatus: String, $plannedAction: String){
          editHealth(id: $id, currentPayment: $currentPayment, currentDelivery: $currentDelivery,
          currentExpense: $currentExpense, plannedExpense: $plannedExpense,initialEndDate: $initialEndDate,
          plannedEndDate: $plannedEndDate, healthStatus: $healthStatus, plannedAction: $plannedAction){
            id, currentPayment, currentDelivery, currentExpense, plannedExpense,initialEndDate, plannedEndDate, healthStatus, plannedAction
          }
    }`;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        id: health.id,
        currentPayment: health.currentPayment,
        currentDelivery: health.currentDelivery,
        currentExpense: health.currentExpense,
        plannedExpense: health.plannedExpense,
        initialEndDate: health.initialEndDate,
        plannedEndDate: health.plannedEndDate,
        healthStatus: health.healthStatus,
        plannedAction: health.plannedAction
      }
    });
  }
  formatDate(date: any) {
    try {
      const isoString = date.toISOString();
      return isoString.substring(0, 10) + ' ' + isoString.substring(11, 19);
    } catch (e) {
      return date;
    }
  }
  resetStore() {
    this.apollo.getClient().resetStore();
  }
}
