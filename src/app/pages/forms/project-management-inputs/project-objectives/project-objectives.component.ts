import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PmoFormService} from '../../../../services/pmo-form.service';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;


interface ProjectObjectivesInterface {
  id: string ;
  phase: string;
  mainActivities: string;
  deliverables: string;
  completionCriteria: string;
}



@Component({
  selector: 'app-project-objectives',
  templateUrl: './project-objectives.component.html',
  styleUrls: ['./project-objectives.component.css', '../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class ProjectObjectivesComponent implements OnInit {
  organizationEntries: ProjectObjectivesInterface[] = [];
  delivrableEntry = <ProjectObjectivesInterface>{};

  delivrableHtmlDialogLabel = 'Add new entry';
  delivrableIndexToEditTo = 0;
  constructor(private pmoService: PmoFormService) { }

  ngOnInit() {

    this.pmoService.getAllDelivrable().subscribe((data: any) => {
        data.data.allDeliverablesByProject.forEach( value =>  this.organizationEntries.push(   value) ) ;

      } , error1 => {}, () =>   {}
    );
  }
  openAddDialogD() {
    this.delivrableHtmlDialogLabel = 'Add new entry';
    this.delivrableEntry = {
      id: '',
      phase: '',
      mainActivities: '',
      deliverables: '',
      completionCriteria: '',
    };
  }
  openEditDialogD(i) {
    this.delivrableHtmlDialogLabel = 'Edit entry';
    this.delivrableIndexToEditTo = i;
    this.delivrableEntry = {
      id: this.organizationEntries[i].id ,
      phase: this.organizationEntries[i].phase,
      completionCriteria: this.organizationEntries[i].completionCriteria,
      mainActivities: this.organizationEntries[i].mainActivities,
      deliverables: this.organizationEntries[i].deliverables
    };
  }
  openDeleteDialogD(i) {

    this.delivrableIndexToEditTo = i;
    this.delivrableEntry = {
      id: this.organizationEntries[i].id ,
      phase: this.organizationEntries[i].phase,
      completionCriteria: this.organizationEntries[i].completionCriteria,
      mainActivities: this.organizationEntries[i].mainActivities,
      deliverables: this.organizationEntries[i].deliverables
    };
  }
  deleteTableRowD() {

    this.pmoService.deleteDelivCell(this.organizationEntries[this.delivrableIndexToEditTo].id).subscribe((resp: any) => {
      this.organizationEntries.splice(this.delivrableIndexToEditTo, 1);
    }, error1 => {
      $.toast({
        heading: 'Project Objectives ',
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
        heading: 'Project Objectives ',
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
  saveD() {
    if (this.delivrableHtmlDialogLabel === 'Add new entry') {
      this.pmoService.saveDelivCell(this.delivrableEntry).subscribe((resp: any) => {
       this.delivrableEntry.id = resp.data.addDeliverables.id;
        this.organizationEntries.push(this.delivrableEntry);
          }, error1 => {
        $.toast({
          heading: 'Project Objectives ',
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
          heading: 'Project Objectives ',
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

      this.pmoService.editDelivCell(this.delivrableEntry).subscribe((resp: any) => {
        this.organizationEntries[this.delivrableIndexToEditTo] = this.delivrableEntry;
      }, error1 => {
        $.toast({
          heading: 'Project Objectives ',
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
          heading: 'Project Objectives ',
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



}
