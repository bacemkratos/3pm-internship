import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {StorageService} from './storage-service.service';
@Injectable()
export class PmoFormService {
  constructor(private apollo: Apollo , private storage: StorageService) {
    this.projectId = this.storage.get('projectId', -1) ;

  }
  projectId =  -1;
  readValues(){
    this.projectId = this.storage.get('projectId', -1) ;
  }

  getAllRiskOpp(){

    const quer = gql` query getall($pid:Int)
{ allRiskOpportunityByProject(projectId:$pid)
   { id ,description ,  type ,probability ,severity ,impact}
}` ;
  return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }

  getAllDelivrable(){

    const quer = gql` query get($pid:Int) {
  allDeliverablesByProject (projectId:$pid )
  {id ,phase , mainActivities , deliverables ,completionCriteria}
}` ;
    return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  getAllOrganization(){

    const quer = gql` query get($pid:Int) {
  allOrganizationByProject (projectId:$pid )
  {id , name , role , entity ,responsibilities,mail ,phone,status}
}` ;
    return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  saveDelivCell(element: any){

    const quer = gql`mutation add3($phase: String,
$mainActivities: String,
$deliverables: String,
$completionCriteria: String,
  $pid:Int) {
  addDeliverables (phase: $phase ,
mainActivities: $mainActivities,
deliverables: $deliverables,
completionCriteria: $completionCriteria,
    projectId:$pid )
  {id,phase , mainActivities , deliverables ,completionCriteria}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        phase:  element.phase,
          mainActivities:  element.mainActivities,
      deliverables: element.deliverables ,
      completionCriteria:  element.completionCriteria,
      pid: this.projectId
      }
    }) ;


  }
  editDelivCell(element: any){

    const quer = gql`mutation edit($id:Int ,$phase:String ,$mainActivities:String
,$deliverables: String ,$completionCriteria: String){
  editDeliverables(id:$id,phase:$phase,mainActivities:$mainActivities
  ,deliverables:$deliverables,completionCriteria:$completionCriteria
  ) {id}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: parseInt ( element.id , 10 ) ,
        phase:  element.phase,
        mainActivities:  element.mainActivities,
        deliverables: element.deliverables ,
        completionCriteria:  element.completionCriteria,

      }
    }) ;
  }
  deleteDelivCell(element: any){

    const quer = gql`mutation  delete($id:Int) {
  deleteDeliverables(id:$id)
 }
` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: parseInt ( element, 10 )
      }
    }) ;


  }
  deleteOrgCell(element: any){

    const quer = gql`mutation delete($id: Int) {
  deleteOrganization(id: $id)
}

` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: parseInt ( element, 10 )
      }
    }) ;


  }
  saveOrgCell(element: any){

    const quer = gql`mutation add2($name: String,
$role: String,
$entity: String,
$responsibilities: String,
$mail:String ,
$phone: Int ,
$status: String ,
  $pid:Int) {
  addOrganization (
name: $name,
role: $role,
entity: $entity,
responsibilities: $responsibilities,
mail:$mail ,
phone: $phone ,
status: $status ,
    projectId:$pid )
  { id}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        name: element.name,
        role: element.role  ,
        entity: element.entity ,
        responsibilities: element.responsibilities,
        mail: element.mail,
        phone: parseInt( element.phone , 10) == null ?  parseInt( element.phone , 10) :0,
        status:  element.status,
        pid: this.projectId
      }
    }) ;
  }
  editOrgCell(element: any){

    const quer = gql`mutation aeditd22($name: String,
$role: String,
$entity: String,
$responsibilities: String,
$mail:String ,
$phone: Int ,
$status: String ,
  $pid:Int) {
  editOrganization (
name: $name,
role: $role,
entity: $entity,
responsibilities: $responsibilities,
mail:$mail ,
phone: $phone ,
status: $status ,
    id:$pid ) {
    id
  }
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        name: element.name,
        role: element.role  ,
        entity: element.entity ,
        responsibilities: element.responsibilities,
        mail: element.mail,
        phone: parseInt( element.phone , 10),
        status:  element.status,
        pid: parseInt(element.id , 10 )
      }
    }) ;


  }
  saverRiskOppCell(element: any){

    const quer = gql`mutation add($description:String ,
$type:String , $probability:String ,$severity:String ,
  $impact:String ,$projectid:Int
){addRiskOpportunity( description:$description ,
  type:$type , probability:$probability ,severity:$severity
  impact:$impact ,projectId:$projectid) {
    id

}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        description: element.description,
        type: element.type ,
        probability: element.probability ,
        severity: element.severity,
        impact: element.impact ,
        projectid: this.projectId
      }
    }) ;


  }

  deleteRiskOppCell(risk_id: number){

    const quer = gql`mutation  delete($id:Int){deleteRiskOpportunity(id:$id)

}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: risk_id
      }
    }) ;

  }


  editRiskOppCell(risk: any){

    const quer = gql`mutation  edit($id:Int , $description:String ,
$type:String , $probability:String ,$severity:String ,$impact:String){editRiskOpportunity(
  id:$id ,description:$description ,type:$type , probability:$probability
,severity:$severity ,impact:$impact)
    { id,
      description ,
      probability,
      severity,
      impact
    }
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
         id: risk.id ,
         description: risk.description  ,
         type: risk.type ,
         probability: risk.probability ,
        severity: risk.severity ,
        impact: risk.impact
      }
    }) ;


  }
  getProjectInfo(){
    const quer = gql`query getproject($pid:Int) {
  project(id:$pid) {
     projectName , projectCode ,projectManager, initialPMOprojectCosts,
    initialPMOtargetProfitability ,initialPMOthresholdProfitability ,
    initialPMOmanDayAffectation , approvedPMOprojectCosts ,
    approvedPMOtargetProfitability ,approvedPMOthresholdProfitability ,
          approvedPMOmanDayAffectation  , summaryObjective ,keyAssumptions , KeyConstraints
    , projectScope ,contractualStartDate ,contractualEndDate
  }
}` ;
    return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  getAllUsers(){
    const quer = gql`query{allUser{id ,username}}` ;
    return  this.apollo.query({
      query: quer
    }) ;
  }
  saveProjectInfo( data: any)
  {
    const quer = gql`mutation pmo($id:Int,$projectManager: String ,$initialPMOprojectCosts: Float,
$initialPMOmanDayAffectation: Int ,
$initialPMOtargetProfitability: Float,
$initialPMOthresholdProfitability: Float,
$approvedPMOprojectCosts: Float,
$approvedPMOmanDayAffectation: Int,
$approvedPMOtargetProfitability: Float,
$approvedPMOthresholdProfitability: Float) {

  projectManagement(id: $id,
projectManager: $projectManager ,
initialPMOprojectCosts:$initialPMOprojectCosts,
initialPMOmanDayAffectation: $initialPMOmanDayAffectation,
initialPMOtargetProfitability: $initialPMOtargetProfitability,
initialPMOthresholdProfitability: $initialPMOthresholdProfitability,
approvedPMOprojectCosts: $approvedPMOprojectCosts,
approvedPMOmanDayAffectation: $approvedPMOmanDayAffectation,
approvedPMOtargetProfitability: $approvedPMOtargetProfitability,
approvedPMOthresholdProfitability: $approvedPMOthresholdProfitability)
  {id}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: this.projectId,
        projectManager: data.pmoProjectManager ,
        initialPMOprojectCosts: parseFloat(data.pmoProjectCostInit),
        initialPMOmanDayAffectation: parseInt( data.pmoProjectManDaytInit , 10),
    initialPMOtargetProfitability: parseFloat( data.pmoProjectProfit),
        initialPMOthresholdProfitability: parseFloat( data.pmoProjecthreshold) ,
        approvedPMOprojectCosts: parseFloat(data.pmoProjectCostA),
        approvedPMOmanDayAffectation: parseInt( data.pmoProjectManDaytA, 10),
    approvedPMOtargetProfitability: parseFloat( data.pmoProjectProfitA),
      approvedPMOthresholdProfitability: parseFloat(data.pmoProjecthresholdA)
      }
    }) ;

  }
  saveProjectObjective(obj: any){

    const quer = gql`mutation add($id:Int,$obj:String) {
  projectObjective (id:$id ,summaryObjective:$obj)
  {id }
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: this.projectId,
        obj: obj
      }
    }) ;


  }
  saveProjectScope(obj: any){

    const quer = gql`mutation add($id:Int,$obj:String) {
  projectScope (id:$id ,projectScope:$obj)
  {id ,projectScope}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: this.projectId,
        obj: obj
      }
    }) ;


  }
  saveProjectAssumption(obj: any , obj2: any){

    const quer = gql`mutation add($id:Int,$obj:String,$obj2:String) {
  assumptionConstraint (projectId:$id ,keyAssumptions:$obj ,KeyConstraints:$obj2)
  {id }
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        id: this.projectId,
        obj: obj ,
        obj2: obj2
      }
    }) ;


  }

  resetStore() {
    this.apollo.getClient().resetStore();
  }

}
