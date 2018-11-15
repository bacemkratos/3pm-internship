import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PmoFormService} from '../../../../services/pmo-form.service';
import {forEach} from 'async';
import {Subscription} from 'apollo-client';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;







interface RiskOppDepEntryInterface {
  id: number ;
  description: string;
  type: string;
  probability: string;
  severity: string;
  impact: string;
}




@Component({
  selector: 'app-project-risks',
  templateUrl: './project-risks.component.html',
  styleUrls: ['./project-risks.component.css', '../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class ProjectRisksComponent implements OnInit , OnDestroy  {
  riskEntries: RiskOppDepEntryInterface[] = [];
  riskEntry = <RiskOppDepEntryInterface>{};
  typeSelectOption = ['Risk', 'Opportunity', 'Dependency', 'Issue'];
  probabilitySelectOptions = ['Low', 'Medium', 'High', 'Critical'];
  severitySelectOptions = ['Low', 'Medium', 'High', 'Critical'];
  riskHtmlDialogLabel = 'Add new entry';
  riskIndexToEditTo = 0;
  constructor(private pmoService: PmoFormService ) {
  }


  ngOnDestroy(): void {

  }
  ngOnInit() {

    this.pmoService.getAllRiskOpp().subscribe((data: any) => {
         data.data.allRiskOpportunityByProject.forEach( value =>  this.riskEntries.push(   value) ) ;

    } , error1 => {}, () =>   {}
      );

  }
  openAddDialogRisk() {
    this.riskHtmlDialogLabel = 'Add new entry';
    this.riskEntry = {
      id: -1,
      description: '',
      type: 'Choose',
      probability: 'Choose',
      severity: 'Choose',
      impact: ''
    };
  }
  openEditDialogRisk(i) {
    this.riskHtmlDialogLabel = 'Edit entry';
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      type: this.riskEntries[i].type,
      probability: this.riskEntries[i].probability,
      severity: this.riskEntries[i].severity,
      impact: this.riskEntries[i].impact
    };
  }
  openDeleteDialogRisk(i) {
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      type: this.riskEntries[i].type,
      probability: this.riskEntries[i].probability,
      severity: this.riskEntries[i].severity,
      impact: this.riskEntries[i].impact
    };
  }
  deleteTableRowRisk() {
    this.pmoService.deleteRiskOppCell(this.riskEntries[this.riskIndexToEditTo].id).subscribe((resp: any) => {
      this.riskEntries.splice(this.riskIndexToEditTo, 1);
    }, error1 => {
      $.toast({
        heading: 'Project Risks & Opportunities ',
        text: `Failed to Delete Data due to following ${error1}`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#ff0003',
        icon: 'error',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }) ;
    } ,  () =>
      $.toast({
        heading: 'Project Risks & Opportunities ',
        text: `Data Has Been Deleted`,
        position: 'top-right',
        showHideTransition: 'slide',
        loaderBg: '#4fff10',
        icon: 'warning',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }));
  }
  saveRisk() {
    if (this.riskHtmlDialogLabel === 'Add new entry') {
      this.pmoService.saverRiskOppCell(this.riskEntry).subscribe((resp: any) => {
        this.riskEntry.id = resp.data.addRiskOpportunity.id;
        this.riskEntries.push(this.riskEntry);
       }, error1 => {
          $.toast({
            heading: 'Project Risks & Opportunities ',
            text: `Failed to Save Data due to following ${error1}`,
            position: 'top-right',
            showHideTransition: 'slide',
            loaderBg: '#ff0003',
            icon: 'error',
            hideAfter: 5000,
            stack: 6,
            loader: false
          }) ;
        } ,  () =>
          $.toast({
            heading: 'Project Risks & Opportunities ',
            text: `Data Has Been Saved`,
            position: 'top-right',
            showHideTransition: 'slide',
            loaderBg: '#4fff10',
            icon: 'success',
            hideAfter: 5000,
            stack: 6,
            loader: false
          })
       );
    } else {
      this.pmoService.editRiskOppCell(this.riskEntry).subscribe((resp: any) => {
        this.riskEntries[this.riskIndexToEditTo] = this.riskEntry;
      }, error1 => {
        $.toast({
          heading: 'Project Risks & Opportunities ',
          text: `Failed to Modify Data due to following ${error1}`,
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#ff0003',
          icon: 'error',
          hideAfter: 5000,
          stack: 6,
          loader: false
        }) ;
      } ,  () =>
        $.toast({
          heading: 'Project Risks & Opportunities ',
          text: `Data Has Been Modified`,
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#4fff10',
          icon: 'success',
          hideAfter: 5000,
          stack: 6,
          loader: false
        }));
    }
  }
  selectTagsAreFilled() {
    return this.riskEntry.impact !== 'Choose' && this.riskEntry.severity !== 'Choose' && this.riskEntry.type !== 'Choose';
  }


}
