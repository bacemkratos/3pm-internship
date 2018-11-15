import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PmoFormService} from '../../../../services/pmo-form.service';
import '../../../../../assets/plugins/toast-master/js/jquery.toast.js';
declare var $: any;







interface ProjectOrganizationInterface {
  id:string ;
  name: string;
  role: string;
  entity: string;
  responsibilities: string;
  mail: string;
  phone: string;
  status: string;

}




@Component({
  selector: 'app-project-organization',
  templateUrl: './project-organization.component.html',
  styleUrls: ['./project-organization.component.css','../../../../../assets/plugins/toast-master/css/jquery.toast.css']
})
export class ProjectOrganizationComponent implements OnInit {

  organizationEntries: ProjectOrganizationInterface[] = [];
  organizationEntry = <ProjectOrganizationInterface>{};

  organizationHtmlDialogLabel = 'Add new entry';
  organizationIndexToEditTo = 0;
  constructor(private pmoService: PmoFormService) { }

  ngOnInit() {

    this.pmoService.getAllOrganization().subscribe((data: any) => {
        data.data.allOrganizationByProject.forEach( value =>  this.organizationEntries.push(   value) ) ;

      } , error1 => {}, () =>   {}
    );
  }
  openAddDialogO() {
    this.organizationHtmlDialogLabel = 'Add new entry';
    this.organizationEntry = {
      id: '',
      name: '',
      role: '',
      entity: '',
      responsibilities: '',
      mail: '' ,
      phone: '' ,
      status: ''
    };
  }
  openEditDialogO(i) {

    this.organizationHtmlDialogLabel = 'Edit entry';
    this.organizationIndexToEditTo = i;
    this.organizationEntry = {
      id: this.organizationEntries[i].id ,
      name: this.organizationEntries[i].name,
      role: this.organizationEntries[i].role,
      entity: this.organizationEntries[i].entity,
      responsibilities: this.organizationEntries[i].responsibilities,
      mail: this.organizationEntries[i].mail,
      phone: this.organizationEntries[i].phone,
      status: this.organizationEntries[i].status
    };
  }
  openDeleteDialogO(i) {

    this.organizationIndexToEditTo = i;
    this.organizationEntry = {
      id: this.organizationEntries[i].id ,
      name: this.organizationEntries[i].name,
      role: this.organizationEntries[i].role,
      entity: this.organizationEntries[i].entity,
      responsibilities: this.organizationEntries[i].responsibilities,
      mail: this.organizationEntries[i].mail,
      phone: this.organizationEntries[i].phone,
      status: this.organizationEntries[i].status
    };
  }
  deleteTableRowO() {

    this.pmoService.deleteOrgCell(this.organizationEntries[this.organizationIndexToEditTo].id).subscribe((resp: any) => {
      this.organizationEntries.splice(this.organizationIndexToEditTo, 1);
    }, error1 => {
      $.toast({
        heading: 'Project Orginazation ',
        text: `Failed to Delete Data due to following ${error1}`,
        position: 'bottom-right',
        showHideTransition: 'slide',
        loaderBg: '#ff0003',
        icon: 'error',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }) ;
    } ,  () =>
      $.toast({
        heading: 'Project Orginazation ',
        text: `Data Has Been Deleted`,
        position: 'bottom-right',
        showHideTransition: 'slide',
        loaderBg: '#4fff10',
        icon: 'warning',
        hideAfter: 5000,
        stack: 6,
        loader: false
      }));
  }
  saveO() {
    if (this.organizationHtmlDialogLabel === 'Add new entry') {
      this.pmoService.saveOrgCell(this.organizationEntry).subscribe((resp: any) => {

      this.organizationEntry.id = resp.data.addOrganization.id;
        this.organizationEntries.push(this.organizationEntry);
      }
        , error1 => {
          $.toast({
            heading: 'Project Orginazation ',
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
            heading: 'Project Orginazation ',
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

      this.pmoService.editOrgCell(this.organizationEntry).subscribe((resp: any) => {
        this.organizationEntries[this.organizationIndexToEditTo] = this.organizationEntry;
         }
         , error1 => {
          $.toast({
            heading: 'Project Orginazation ',
            text: `Failed to Modify Data due to the following ${error1}`,
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
          heading: 'Project Orginazation ',
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
