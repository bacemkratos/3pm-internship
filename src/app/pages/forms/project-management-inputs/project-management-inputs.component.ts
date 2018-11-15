import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {PmoFormService} from '../../../services/pmo-form.service';
import '../../../../assets/plugins/toast-master/js/jquery.toast.js';
import {Router} from '@angular/router';
declare var $: any;





@Component({
  selector: 'app-project-management-inputs',
  templateUrl: './project-management-inputs.component.html',
  styleUrls: ['./project-management-inputs.component.css' , '../../../../assets/plugins/toast-master/css/jquery.toast.css']

})
export class ProjectManagementInputsComponent implements OnInit , OnDestroy {

  projectManagers= [];
  projectName: any ;
  projectCode: any ;
  estimatedStartDate: any ;
  estimatedEndDate: any ;
  projectObjectivesTable: FormGroup = new FormGroup({}) ;
  projectRisksTable: FormGroup = new FormGroup({}) ;
  projectOrgTable: FormGroup = new FormGroup({}) ;

  projectObjectivesForm: FormGroup ;
  ProjectManagementForm: FormGroup;
  projectAssumptionForm: FormGroup;

  uploader: FileUploader = new FileUploader({
    url: 'ff',
    isHTML5: true
  });

  constructor(private fb: FormBuilder , private pmoService: PmoFormService, private router: Router ) {
    this.projectAssumptionForm = fb.group({
      'keyAssumption': [null, Validators.compose([ Validators.required])],
      'keyConstraint': [null, Validators.compose([ Validators.required])],



    }) ;

 this.projectObjectivesForm = fb.group({
   'projecSummaryObjectives': [null, Validators.compose([ Validators.required])],
   'projecScope': [null, Validators.compose([ Validators.required])],
   'projectObjectivesTable': this.projectObjectivesTable ,

 }) ;
    this.ProjectManagementForm = fb.group({
      'pmoProjectCostInit': [null , Validators.compose([Validators.required, Validators.pattern('[0-9]{3,}')])] ,
      'pmoProjectProfit': [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{1,2})$|^100$/)])] ,
      'pmoProjecthreshold': [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{1,2})$|^100$/)])] ,
      'pmoProjectManDaytA': [null , Validators.compose([Validators.required, Validators.pattern('[0-9]{1,}')])] ,
      'pmoProjectCostA': [null , Validators.compose([Validators.required, Validators.pattern('[0-9]{3,}')])] ,
      'pmoProjectProfitA': [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{1,2})$|^100$/)])] ,
      'pmoProjecthresholdA': [null , Validators.compose([Validators.required, Validators.pattern(/^([0-9]{1,2})$|^100$/)])] ,
      'pmoProjectManDaytInit': [null , Validators.compose([Validators.required, Validators.pattern('[0-9]{1,}')])] ,
      'pmoProjectManager': [null , Validators.compose([Validators.required])],

    });
  }

  ngOnInit() {
    this.pmoService.readValues();
    if (this.pmoService.projectId === -1) {
      $.toast({
        heading: 'No Project Selected ! ',
        text: `Please Select a project Before entering Project Management Form`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#ff0003',
        icon: 'error',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }) ;
      this.router.navigate(['/dashboard/home']);
    }
    this.pmoService.getAllUsers().subscribe(( data: any) => {
      this.projectManagers = [];
      this.projectManagers.push({username: 'NONE'});
      data.data.allUser.forEach( value =>  this.projectManagers.push(   Object.assign({}, value) ) );
    }) ;
 this.pmoService.getProjectInfo().subscribe((data: any) => {
   this.projectName = data.data.project.projectName ;
this.projectCode = data.data.project.projectCode ;
this.estimatedEndDate = data.data.project.contractualEndDate;
  this.estimatedStartDate = data.data.project.contractualStartDate;
  this.projectAssumptionForm.controls['keyAssumption'].setValue(  data.data.project.keyAssumptions);
   this.projectAssumptionForm.controls['keyConstraint'].setValue(  data.data.project.KeyConstraints );
   this.projectObjectivesForm.controls['projecSummaryObjectives'].setValue(data.data.project.summaryObjective) ;
   this.projectObjectivesForm.controls['projecScope'].setValue(data.data.project.projectScope) ;
   this.ProjectManagementForm.controls['pmoProjectCostInit'].setValue(data.data.project.initialPMOprojectCosts) ;
   this.ProjectManagementForm.controls['pmoProjectProfit'].setValue(data.data.project.initialPMOtargetProfitability) ;
   this.ProjectManagementForm.controls['pmoProjecthreshold'].setValue(data.data.project.initialPMOthresholdProfitability) ;
   this.ProjectManagementForm.controls['pmoProjectManDaytInit'].setValue(data.data.project.initialPMOmanDayAffectation) ;
   this.ProjectManagementForm.controls['pmoProjectManager'].setValue(data.data.project.projectManager) ;
   this.ProjectManagementForm.controls['pmoProjectCostA'].setValue(data.data.project.approvedPMOprojectCosts) ;
   this.ProjectManagementForm.controls['pmoProjectProfitA'].setValue(data.data.project.approvedPMOtargetProfitability) ;
   this.ProjectManagementForm.controls['pmoProjecthresholdA'].setValue(data.data.project.approvedPMOthresholdProfitability) ;
   this.ProjectManagementForm.controls['pmoProjectManDaytA'].setValue(data.data.project.approvedPMOmanDayAffectation) ;
 }) ;


  }

submitProjectManagementForm() {
    if (this.ProjectManagementForm.valid)
    {
      this.pmoService.saveProjectInfo(this.ProjectManagementForm.value).subscribe(data => {},
          error1 => {
            $.toast({
              heading: 'Project Management Inputs ',
              text: `Failed to Save Data due to following ${error1}`,
              position: 'top-right',
              showHideTransition: 'slide',
              loaderBg: '#ff0003',
              icon: 'error',
              hideAfter: 5000,
              stack: 6,
              loader: false
            }) ;
          },
        () =>
        $.toast({
          heading: 'Project Management Inputs ',
          text: 'Data has been Saved',
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#4fff10',
          icon: 'success',
          hideAfter: 5000,
          stack: 6,
          loader: false
        })
      ) ;
      }
}

saveOrUpdateProjectSummary()
{
  if (this.projectObjectivesForm.controls['projecSummaryObjectives'].valid)
  {this.pmoService.saveProjectObjective(this.projectObjectivesForm.controls['projecSummaryObjectives'].value).subscribe(data => {}
  , error1 => {
      $.toast({
        heading: 'Project Summary Objectives ',
        text: `Failed to Save Data due to following ${error1}`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#4fff10',
        icon: 'error',
        hideAfter: 5000,
        stack: 6,
        loader: false
      });
    },
    () => {
    $.toast({
      heading: 'Project Summary Objectives ',
      text: 'Data has been Saved',
      position: 'top-right',
      showHideTransition: 'slide',
      loaderBg: '#4fff10',
      icon: 'success',
      hideAfter: 5000,
      stack: 6,
      loader: false
    });
  }
  ) ;
    }
}

  saveOrUpdateScope()
  {
    if (this.projectObjectivesForm.controls['projecScope'].valid)
    {
      this.pmoService.saveProjectScope(this.projectObjectivesForm.controls['projecScope'].value).subscribe(data => {}
        , error1 => {
          $.toast({
            heading: 'Project Scope  ',
            text: `Failed to Save Data due to following ${error1}`,
            position: 'top-right',
            showHideTransition: 'slide',
            loaderBg: '#4fff10',
            icon: 'error',
            hideAfter: 5000,
            stack: 6,
            loader: false
          }) ;
        },
        () => {
          $.toast({
            heading: 'Project Scope ',
            text: 'Data has been Saved',
            position: 'top-right',
            showHideTransition: 'slide',
            loaderBg: '#4fff10',
            icon: 'success',
            hideAfter: 5000,
            stack: 6,
            loader: false
          });
        }
      ) ;
    }
  }
  saveOrUpdateAssumConstraint()
  {
      if (this.projectAssumptionForm.valid)
      {
        this.pmoService.saveProjectAssumption(this.projectAssumptionForm.controls['keyAssumption'].value , this.projectAssumptionForm.controls['keyConstraint'].value).subscribe(
          data => {}
          , error1 => {
            $.toast({
              heading: 'Project Key Assumption & Constraints  ',
              text: `Failed to Save Data due to following ${error1}`,
              position: 'top-right',
              showHideTransition: 'slide',
              loaderBg: '#4fff10',
              icon: 'error',
              hideAfter: 5000,
              stack: 6,
              loader: false
            }) ;
          },
          () => {
            $.toast({
              heading: 'Project Key Assumption & Constraints ',
              text: 'Data has been Saved',
              position: 'top-right',
              showHideTransition: 'slide',
              loaderBg: '#4fff10',
              icon: 'success',
              hideAfter: 5000,
              stack: 6,
              loader: false
            });
          }
        );
      }
  }

  ngOnDestroy(): void {
    this.pmoService.resetStore();
  }

}
