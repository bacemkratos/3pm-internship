import {Injectable, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {parseDate} from 'ngx-bootstrap/chronos';
import {StorageService} from './storage-service.service';
@Injectable()
export class FinancialFormService {
  projectId =  -1;
  constructor(private apollo: Apollo , private storage: StorageService) {
    this.projectId = this.storage.get('projectId',-1) ;
  }
  readValues(){
    this.projectId = this.storage.get('projectId',-1) ;
  }
  getProjectInfo(){
    const quer = gql`query getproject($pid:Int) {
  project(id:$pid) {
     projectName , projectCode ,projectManager, approvedPMOprojectCosts ,
    approvedPMOtargetProfitability ,approvedPMOthresholdProfitability ,
          approvedPMOmanDayAffectation ,projectSaleValue,plannedToBill,
    currentBilled
  }
}` ;
    return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  addFinancial(element: any){

    const quer = gql`mutation financial($pid:Int ,$cbill:Float , $pbill:Float) {
  projectFinancial(id:$pid ,plannedToBill:$pbill , currentBilled:$cbill) {
     projectName
  }
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        pid: this.projectId ,
        cbill: parseFloat( element.controls['currentBilled'].value) ,
        pbill: parseFloat( element.controls['plannedBill'].value)
      }
    }) ;


  }
  getAllTerms(){

    const quer = gql` query  da($pid:Int ) {
    allTermByProject(projectId:$pid) { id
    description ,amount ,estimatedDate
  }
}` ;
    return  this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }

 saveTerm(  element ){
   const quer = gql`mutation add($pid:Int , $description:String ,
$amount:Float ,$estimatedDate:DateTime) {
addTerm(projectId:$pid ,description:$description
,amount:$amount ,estimatedDate:$estimatedDate){id}
}` ;
   return  this.apollo.mutate({
     mutation: quer,
     variables: {
   pid: this.projectId ,
     description:  element.description,
     amount:  parseFloat( element.amount) ,
     estimatedDate: this.formatDate( element.date)
     }
   }) ;

 }
  editTerm(  element ){
    const quer = gql`mutation edit($pid:Int , $description:String ,
$amount:Float ,$estimatedDate:DateTime) {
editTerm(id:$pid ,description:$description
,amount:$amount ,estimatedDate:$estimatedDate){id}
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        pid: parseInt(element.id , 10),
        description:  element.description,
        amount:  parseFloat( element.amount) ,
        estimatedDate: this.formatDate( element.date)
      }
    }) ;

  }
  deletetTerm(  element ){
    const quer = gql`mutation del($pid:Int ) {
deleteTerm(id:$pid)
}` ;
    return  this.apollo.mutate({
      mutation: quer,
      variables: {
        pid: parseInt(element , 10)
      }
    }) ;

  }
  formatDate(date: any) {
    try {
      const isoString = date.toISOString();
      return isoString.substring(0, 10) + ' ' + isoString.substring(11, 19);
    } catch (e) {
      return date;
    }
  }


}
