import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinancialFormService} from '../../../services/financial-form.service';
import '../../../../assets/plugins/toast-master/js/jquery.toast.js';
import {Router} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-financial-inputs',
  templateUrl: './financial-inputs.component.html',
  styleUrls: ['./financial-inputs.component.css', '../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class FinancialInputsComponent implements OnInit {

  ProjectFinancialForm: FormGroup;
  projectName: any ;
  projectCode: any ;
  projectManager: any;
  approvedCost: any ;
  approvedProf: any;
  approvedThresh: any ;
  approvedManday: any ;
  salesValue: any ;

  constructor(private fb: FormBuilder , private financialService: FinancialFormService , private router: Router) {

    this.ProjectFinancialForm = fb.group({
      'currentBilled': [null, Validators.compose([ Validators.required, Validators.pattern(/^([0-9]{1,})\.([0-9]{1,})$/)])],
      'plannedBill': [null, Validators.compose([ Validators.required,  Validators.pattern(/^([0-9]{1,})\.([0-9]{1,})$/)])],



    }) ;
  }

  ngOnInit() {
    this.financialService.readValues();
    if (this.financialService.projectId === -1) {
    $.toast({
      heading: 'No Project Selected ! ',
      text: `Please Select a project Before entering Project Financial Form`,
      position: 'top-right',
      showHideTransition: 'slide',
      loaderBg: '#ff0003',
      icon: 'error',
      hideAfter: 5000,
      stack: 6,
      loader: false
    }) ;
    this.router.navigate(['/dashboard/home']); }
    this.financialService.getProjectInfo().subscribe(
      (data: any) => {
        this.projectName = data.data.project.projectName ;
        this.projectCode = data.data.project.projectCode ;
        this.projectManager = data.data.project.projectManager ;
        this.approvedCost = data.data.project.approvedPMOprojectCosts ;
        this.approvedProf = data.data.project.approvedPMOtargetProfitability ;
        this.approvedThresh = data.data.project.approvedPMOthresholdProfitability ;
        this.approvedManday = data.data.project.approvedPMOmanDayAffectation ;
        this.salesValue = data.data.project.projectSaleValue ;
        this.ProjectFinancialForm.controls['currentBilled'].setValue((data.data.project.currentBilled === null ) ? '0.0' : data.data.project.currentBilled  )  ;

        this.ProjectFinancialForm.controls['plannedBill'].setValue((data.data.project.plannedToBill === null) ? '0.0' : data.data.project.plannedToBill) ;
      }
    );
  }

  submitProjectFinancialForm(){
    if (this.ProjectFinancialForm.valid)
    { this.financialService.addFinancial(this.ProjectFinancialForm).subscribe(data => {},
      error1 => {
        $.toast({
          heading: 'Project Financial Inputs ',
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
          heading: 'Project Financial Inputs',
          text: 'Data has been Saved',
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#4fff10',
          icon: 'success',
          hideAfter: 5000,
          stack: 6,
          loader: false
        }));
  }}
}
