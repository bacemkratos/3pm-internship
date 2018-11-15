import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectRiskOppDepTableComponent} from './project-risk-opp-dep-table/project-risk-opp-dep-table.component';
import {PresalesFormService} from '../../../services/presales-form.service';
import {NotificationService} from '../../../services/notification.service';
import '../../../../assets/plugins/toast-master/js/jquery.toast.js';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-presales-inputs-form',
  templateUrl: './presales-inputs-form.component.html',
  styleUrls: ['./presales-inputs-form.component.css', '../../../../assets/plugins/toast-master/css/jquery.toast.css'],

})
export class PresalesInputsFormComponent implements OnInit, OnDestroy {
  @ViewChild(ProjectRiskOppDepTableComponent) child: ProjectRiskOppDepTableComponent;
  presalesInputsForm: FormGroup;
  accManagers = [];
  relatedProjects = [];
  selectedRelatedProjects = [];
  businessValues = ['Strategic', 'Not strategic'];
  yesOrNo= ['No', 'Yes'];
  init = true;
  // to use JSON in html
  json = JSON;
  constructor(private fb: FormBuilder, public presalesService: PresalesFormService, private router: Router, private notificationService: NotificationService) {
    this.presalesInputsForm = fb.group({
      'projectName': [null, Validators.minLength(3)],
      'projectCode': [null],
      'AccountManager': ['Choose', Validators.pattern('^((?!Choose).)*$')],
      'endCustomer': [null, Validators.minLength(3)],
      'intermediateCustomer': [''],
      'projectSaleValue': [null, Validators.pattern('^[0-9]+(\\.[0-9]+)?$')],
      'projectQuotation': [null, Validators.required],
      'contractualPlanning': [null, Validators.required],
      'contractualStartDate': [null, Validators.required],
      'contractualEndDate': [null, Validators.required],
      'businessValueType': ['Choose'],
      'businessValueDescription': [''],
      'recommendedMethodology': [''],
      'relatedProject': ['Choose'],
      'mobile': [false],
      'ebusiness': [false],
      'ess': [false],
      'support': [false],
      'departOther': [''],
      'hasContract': ['Choose']
    });
  }
  problemStatement = '';
  ngOnInit() {

    this.presalesService.readValues();
    if (this.presalesService.projectId === -1) {
    $.toast({
      heading: 'No Project Selected ! ',
      text: `Please Select a project Before entering Project Presales Form`,
      position: 'top-right',
      showHideTransition: 'slide',
      loaderBg: '#ff0003',
      icon: 'error',
      hideAfter: 5000,
      stack: 6,
      loader: false
    }) ;
    this.router.navigate(['/dashboard/home']); }
    this.child.dosmthn();

      this.presalesService.getProjectInputs().subscribe((resp: any) => {
        for ( const key in resp.data.project) {
          if (this.presalesInputsForm.contains(key)) {
            if (key === 'contractualStartDate' || key === 'contractualEndDate' ) {
              this.presalesInputsForm.controls[key].setValue(new Date(resp.data.project[key]));
            } else {
              this.presalesInputsForm.controls[key].setValue(resp.data.project[key]);
            }
          }
          if (key === 'problemStatement') this.problemStatement = resp.data.project[key];
        }
      });
      // this can throw an error in the console if project has no defined related projects, doesnt affect app behavior tho
      this.presalesService.getRelatedProjects().subscribe(
        (resp: any) => resp.data.relatedProjects.forEach(
          value => this.selectedRelatedProjects.push({id: value.id, projectName: value.projectName}))
      );

    this.presalesService.isNewProject = false;
    this.init = this.presalesInputsForm.value.AccountManager === 'Choose';
    this.accManagers =[] ;
    this.presalesService.getAllUsers().subscribe((resp: any) =>
      resp.data.allUser.forEach((value:any) => {
        if( value.roles.indexOf('AM')>= 0)
        {this.accManagers.push(value);}
      } )
    );
    this.presalesService.getAllProjects().subscribe((resp: any) => this.relatedProjects = resp.data.allProject);
  }

  formatDate(strDate: string) {
    return strDate.substring(0, 10) + ' ' + strDate.substring(11, 19);
  }
  // some relatedProjects logic is in html
  onClickSubmitProjectInput() {
    this.presalesService.sendProjectInputs( this.presalesInputsForm.value, JSON.parse(JSON.stringify(this.selectedRelatedProjects)))
      .subscribe((resp: any) =>{},
        () => this.triggerToast('Project Inputs', 'An error occurred, try again later.', 'error'),
        () => {
            this.triggerToast('Project Inputs', 'Project inputs submitted successfully.', 'success')
            let title = 'Un nouveau Projet a été mis à jour';
            let message = 'Un projet ' + this.presalesInputsForm.value.projectName + ' a été mis à jour.';
            if (this.init) {
                title = 'Un nouveau Projet a été complété';
                message = 'Un projet ' + this.presalesInputsForm.value.projectName + ' a été enregistré.';
            }
            this.notificationService.addNotification( {
                title: title,
                message: message,
                projectId: this.presalesService.projectId,
                recipients: [this.presalesInputsForm.value.accountManager],
                groups: ['PMO'],
            });
          }
        );
  }
  submitProblemStatement(problem: String){
    this.presalesService.addProblemStatement(problem).subscribe(
      () => this.triggerToast('Problem Statement', 'Problem statement submitted successfully.', 'success'),
      () => this.triggerToast('Project Inputs', 'An error occurred, try again later.', 'error')
    );
  }
  ngOnDestroy() {
    this.presalesService.resetStore();
  }

  triggerToast(heading: string, text: string, icon: string) {
    $.toast({
      heading: heading,
      text: text,
      position: 'top-right',
      loaderBg: '#ff6849',
      icon: icon,
      hideAfter: 5000,
      stack: 6,
      loader: false
    });
  }
  triggerUploadingToast() {
    $.toast({
      heading: 'Upload in progress',
      text: 'Your file is being uploaded',
      position: 'top-right',
      loaderBg: '#ff6849',
      icon: 'warning',
      hideAfter: 2000,
      stack: 6,
      loader: false
    });
  }
  fileChange(event, type: string) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('name', file.name);
      formData.append('type', type);
      formData.append('path', file);
      this.triggerUploadingToast();
      // this.http.post('http://10.10.219.76:8000/project/1/file/add', formData)
      this.presalesService.uploadFile(formData, 'project', this.presalesService.projectId)
        .subscribe(
          data => this.triggerToast(type, 'File uploaded successfully.', 'success'),
          error => this.triggerToast(type, 'An error occurred uploading your file.', 'error')
        );
    }
  }
  selectChangeRelatedProjects(value: any) {
    const jsonVal = JSON.parse(value);
    let isInArray = false;
    this.selectedRelatedProjects.forEach( item => {
      if (item.id === jsonVal.id) {
        isInArray = true;
      }
    }) ;
    if (!isInArray) {
      this.selectedRelatedProjects.push(jsonVal);
    }
  }
  getMinDate(date: string)
  {
    return new Date(date)  ;
  }
  /*
  upload(file: HTMLInputElement){
    let formData: FormData = new FormData();
    formData.append('name', file.files[0].name);
    formData.append('type', 'BRD');
    formData.append('path', file.files[0]);

    this.http.post('http://10.10.219.76:8000/project/1/file/add', formData)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
  */
}
