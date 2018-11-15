import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../AppConfig';
import {StorageService} from './storage-service.service';

@Injectable()
export class PresalesFormService {

  constructor(private apollo: Apollo, private http: HttpClient , private storage: StorageService) {
    this.projectId = this.storage.get('projectId', -1) ;

  }

  projectId = -1;
  isNewProject = false;
  readValues(){
    this.projectId = this.storage.get('projectId', -1) ;
  }
  createProject() {

    return this.apollo.mutate({
      mutation: gql`mutation {
        addProject{id}
      }`
    });
  }
  nameProject(id: any, name: any) {

    return this.apollo.mutate({
      mutation: gql`mutation($id: Int, $projectName: String, $projectCode: String, $AccountManager: String, $endCustomer: String,
        $intermediateCustomer: String, $projectSaleValue: Float, $contractualStartDate: DateTime, $contractualEndDate: DateTime,
        $businessValueType: String, $businessValueDescription: String, $recommendedMethodology: String,$relatedProjects: [RelatedProject],
        $mobile: Boolean, $ebusiness: Boolean, $ess: Boolean, $support: Boolean) {
        addProjectInput(
          id: $id,
          projectName: $projectName,
          projectCode: $projectCode,
          AccountManager: $AccountManager,
          endCustomer: $endCustomer,
          intermediateCustomer: $intermediateCustomer,
          projectSaleValue: $projectSaleValue,
          contractualStartDate: $contractualStartDate,
          contractualEndDate: $contractualEndDate,
          businessValueType: $businessValueType,
          businessValueDescription: $businessValueDescription,
          recommendedMethodology: $recommendedMethodology,
          relatedProjects: $relatedProjects,
          mobile: $mobile,
          ebusiness: $ebusiness,
          ess: $ess,
          support: $support
        )
{
  id
  projectName
}}` , variables: {
        projectName: name ,
        id: parseInt( id , 10) ,
        projectCode: 'PRX-PRJOC-029',
        AccountManager:"",
        endCustomer: "",
        intermediateCustomer: "",
        projectSaleValue: parseFloat("0.0"),
        contractualStartDate: this.formatDate(new Date()),
        contractualEndDate: this.formatDate(new Date()),
        businessValueType:"",
        businessValueDescription: "",
        recommendedMethodology: "",
        mobile: false,
        ebusiness: false ,
        ess: false,
        support: false,
        relatedProjects: []
      }
    });
  }
  sendProjectInputs(inputs: any, relatedProjects: any) {
    return this.apollo.mutate({
      mutation: gql`mutation($id: Int, $projectName: String, $projectCode: String, $AccountManager: String, $endCustomer: String,
        $intermediateCustomer: String, $projectSaleValue: Float, $contractualStartDate: DateTime, $contractualEndDate: DateTime,
        $businessValueType: String, $businessValueDescription: String, $recommendedMethodology: String,$relatedProjects: [RelatedProject],
        $mobile: Boolean, $ebusiness: Boolean, $ess: Boolean, $support: Boolean) {
        addProjectInput(
          id: $id,
          projectName: $projectName,
          projectCode: $projectCode,
          AccountManager: $AccountManager,
          endCustomer: $endCustomer,
          intermediateCustomer: $intermediateCustomer,
          projectSaleValue: $projectSaleValue,
          contractualStartDate: $contractualStartDate,
          contractualEndDate: $contractualEndDate,
          businessValueType: $businessValueType,
          businessValueDescription: $businessValueDescription,
          recommendedMethodology: $recommendedMethodology,
          relatedProjects: $relatedProjects,
          mobile: $mobile,
          ebusiness: $ebusiness,
          ess: $ess,
          support: $support
        )
        {
          projectName,
          projectCode,
          AccountManager,
          endCustomer,
          intermediateCustomer,
          projectSaleValue,
          contractualStartDate,
          contractualEndDate,
          businessValueType,
          businessValueDescription,
          recommendedMethodology,
          mobile,
          ebusiness,
          ess,
          support,
        }
      }`,
      variables: {
        id: this.projectId,
        projectName: inputs.projectName,
        projectCode: 'PRX-PRJOC-029',
        AccountManager: inputs.AccountManager,
        endCustomer: inputs.endCustomer,
        intermediateCustomer: inputs.intermediateCustomer,
        projectSaleValue: parseFloat(inputs.projectSaleValue),
        contractualStartDate: this.formatDate(inputs.contractualStartDate),
        contractualEndDate: this.formatDate(inputs.contractualEndDate),
        businessValueType: inputs.businessValueType,
        businessValueDescription: inputs.businessValueDescription,
        recommendedMethodology: inputs.recommendedMethodology,
        mobile: inputs.mobile,
        ebusiness: inputs.ebusiness,
        ess: inputs.ess,
        support: inputs.support,
        relatedProjects: relatedProjects
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
  getAllRiskOpp() {
    const quer = gql`query getall($pid:Int){
      allRiskOpportunityByProject(projectId:$pid) {
        description , type ,probability ,severity ,impact, id
       }
    }`;
    return this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  getProjectInputs() {
    const quer = gql`query($projectId: Int){
      project(id: $projectId){
        projectName,
        projectCode,
        AccountManager,
        endCustomer,
        intermediateCustomer,
        projectSaleValue,
        contractualStartDate,
        contractualEndDate,
        businessValueType,
        businessValueDescription,
        recommendedMethodology,
        mobile,
        ebusiness,
        ess,
        support,
        problemStatement
      }
    }`;
    return this.apollo.query({
      query: quer,
      variables: {
        projectId: this.projectId
      }
    });
  }
  addRiskOpp(element: any) {
    const quer = gql`mutation add($description:String ,
    $type:String , $probability:String ,$severity:String ,
    $impact:String ,$projectid:Int){
      addRiskOpportunity( description:$description ,
      type:$type , probability:$probability ,severity:$severity
      impact:$impact ,projectId:$projectid) {
        id
      }
    }` ;
    return this.apollo.mutate({
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
  editRiskOpp(element: any) {
    const quer = gql`mutation edit($description:String ,
    $type:String , $probability:String ,$severity:String ,
    $impact:String ,$id:Int){
      editRiskOpportunity( description:$description ,
      type:$type , probability:$probability ,severity:$severity
      impact:$impact ,id:$id) {
        id
      }
    }` ;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        description: element.description,
        type: element.type ,
        probability: element.probability ,
        severity: element.severity,
        impact: element.impact ,
        id: element.id
      }
    }) ;
  }
  deleteRiskOpp(id: number) {
    const quer = gql`mutation($id:Int){
      deleteRiskOpportunity(id: $id)
    }` ;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        id: id
      }
    });
  }
  getAllHistory() {
    const quer = gql`query getall($pid:Int){
      allHistoryByProject(projectId:$pid) {
        description , type , date, id, relatedDocuments {name}
       }
    }`;
    return this.apollo.query({
      query: quer,
      variables: {
        pid: this.projectId
      }
    }) ;
  }
  addHistory(element: any) {
    const quer = gql`mutation add($description:String ,
    $type:String , $date :String  ,$projectId:Int){
      addHistory( description:$description ,
      type:$type , date:$date, projectId:$projectId) {
        id
      }
    }` ;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        description: element.description,
        type: element.type ,
        date: this.formatDate(element.date),
        projectId: this.projectId
      }
    }) ;
  }
  editHistory(element: any) {
    const quer = gql`mutation edit($description:String ,
    $type:String , $date :String  ,$id:Int){
      editHistory( description:$description ,
      type:$type , date:$date, id:$id) {
        id
      }
    }` ;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        description: element.description,
        type: element.type ,
        date: this.formatDate(element.date),
        id: element.id
      }
    }) ;
  }
  deleteHistory(id: number) {
    const quer = gql`mutation($id:Int){
      deleteHistory(id: $id)
    }` ;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        id: id
      }
    });
  }
  getAllUsers() {
    const quer = gql`query{allUser{id ,username , roles}}` ;
    return  this.apollo.query({
      query: quer
    }) ;
  }
  getAllProjects() {
    const quer = gql`query{allProject{id, projectName}}` ;
    return  this.apollo.query({
      query: quer
    }) ;
  }
  getRelatedProjects() {
    const quer = gql`query($projectId: Int){
      relatedProjects(projectId: $projectId){
        id,
        projectName
      }
    }`;
    return this.apollo.query({
      query: quer,
      variables: {
        projectId: this.projectId
      }
    });
  }
  uploadFile(formData: FormData, sub: string, id: number) {
    return this.http.post(baseUrl + '/' + sub + '/' + id + '/file/add', formData);
  }

  addProblemStatement(problem: String){
    const quer = gql`mutation($id: Int, $problemStatement: String, $contractStatus: String){
      addProjectAgreement(id: $id, problemStatement: $problemStatement, contractStatus: $contractStatus) {
        id
      }
    }`;
    return this.apollo.mutate({
      mutation: quer,
      variables: {
        id: this.projectId,
        problemStatement: problem,
        contractStatus: 'idk'
      }
    });
  }
  resetStore() {
    this.apollo.getClient().resetStore();
  }

  getProjectNameAndManagers() {
      const quer = gql`query($projectId: Int){
      project(id: $projectId){
        projectName,
        AccountManager,
        projectManager
      }
    }`;
      return this.apollo.query({
          query: quer,
          variables: {
              projectId: this.projectId
          }
      });
  }
}
