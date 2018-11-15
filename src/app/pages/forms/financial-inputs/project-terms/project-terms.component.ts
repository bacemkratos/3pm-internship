import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PmoFormService} from '../../../../services/pmo-form.service';
import {FinancialFormService} from '../../../../services/financial-form.service';
import {parseDate} from 'ngx-bootstrap/chronos';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;






interface ProjectTerms {
  id: string ;
  description: string;
  amount: number;
  date: string;

}

@Component({
  selector: 'app-project-terms',
  templateUrl: './project-terms.component.html',
  styleUrls: ['./project-terms.component.css', '../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class ProjectTermsComponent implements OnInit {
  riskEntries: ProjectTerms[] = [];
  riskEntry = <ProjectTerms>{};
  riskHtmlDialogLabel = 'Add new entry';
  riskIndexToEditTo = 0;
  constructor(private financialService: FinancialFormService ) {
  }


  ngOnDestroy(): void {

  }

  ngOnInit() {

    this.financialService.getAllTerms().subscribe((data: any) => {

        data.data.allTermByProject.forEach( (value: any) =>  {

          const val: ProjectTerms  = { id : ' ' , description: ' ' , amount: 0.0 , date: null};
         val.id = value.id ;
          val.description = value.description ;
          val.amount =  parseFloat(value.amount) ;
          val.date = value.estimatedDate ;
          this.riskEntries.push(   val) ;

        } ) ;

      } , error1 => {}, () =>   {}
    );

  }
  openAddDialogRisk() {
    this.riskHtmlDialogLabel = 'Add new entry';
    this.riskEntry = {
      id: '' ,
      description: '',
    amount: 0 ,
    date:  null ,
    };
  }
  openEditDialogRisk(i) {
    this.riskHtmlDialogLabel = 'Edit entry';
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      amount: this.riskEntries[i].amount,
      date: this.riskEntries[i].date
    };
  }
  openDeleteDialogRisk(i) {
    this.riskIndexToEditTo = i;
    this.riskEntry = {
      id: this.riskEntries[i].id,
      description: this.riskEntries[i].description,
      amount: this.riskEntries[i].amount,
      date: this.riskEntries[i].date
    };
  }
  deleteTableRowRisk() {
    this.financialService.deletetTerm(this.riskEntries[this.riskIndexToEditTo].id).subscribe((resp: any) => {
      this.riskEntries.splice(this.riskIndexToEditTo, 1);
    }, error1 => {
      $.toast({
        heading: 'Project Terms ',
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
        heading: 'Project Terms ',
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

      this.financialService.saveTerm(this.riskEntry).subscribe((resp: any) => {
        this.riskEntry.id = resp.data.addTerm.id;
        this.riskEntries.push(this.riskEntry);
      }, error1 => {
        $.toast({
          heading: 'Project Terms ',
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
          heading: 'Project Terms ',
          text: `Data Has Been Saved`,
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#4fff10',
          icon: 'success',
          hideAfter: 5000,
          stack: 6,
          loader: false
        }));
    } else {

      this.financialService.editTerm(this.riskEntry).subscribe((resp: any) => {

        this.riskEntries[this.riskIndexToEditTo] = this.riskEntry;

      }, error1 => {
        $.toast({
          heading: 'Project Terms ',
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
          heading: 'Project Terms ',
          text: `Data Has Been Modified`,
          position: 'top-right',
          showHideTransition: 'slide',
          loaderBg: '#4fff10',
          icon: 'success',
          hideAfter: 5000,
          stack: 6 ,
          loader: false
        }));
    }
  }


}
