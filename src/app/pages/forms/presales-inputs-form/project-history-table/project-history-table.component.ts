import { Component, OnInit } from '@angular/core';
import {PresalesFormService} from '../../../../services/presales-form.service';

declare var $: any;

interface ProjectHistoryInterface {
  id: number;
  description: string;
  date: Date;
  type: string;
  relatedDocuments: {name: string};
}

@Component({
  selector: 'app-project-history-table',
  templateUrl: './project-history-table.component.html',
  styleUrls: ['./project-history-table.component.css']
})
export class ProjectHistoryTableComponent implements OnInit {
  defaultDateSelected: Date = new Date();
  entries: ProjectHistoryInterface[] = [];
  entry = <ProjectHistoryInterface>{};
  htmlDialogLabel = 'Add new entry';
  indexToEditTo = 0;
  fileFormData: FormData;
  constructor(private presalesService: PresalesFormService) { }

  ngOnInit() {
    this.presalesService.getAllHistory().subscribe((data: any) => {
      data.data.allHistoryByProject.forEach(value => this.entries.push(value));
    });
  }
  openAddDialog() {
    this.fileFormData = null;
    this.htmlDialogLabel = 'Add new entry';
    this.entry = {
      id: -1,
      description: '',
      date: this.defaultDateSelected,
      type: '',
      relatedDocuments: {name: ''},
    };
  }
  openEditDialog(i) {
    this.fileFormData = null;
    this.htmlDialogLabel = 'Edit entry';
    this.indexToEditTo = i;
    this.entry = {
      id: this.entries[i].id,
      description: this.entries[i].description,
      date: new Date(this.entries[i].date),
      type: this.entries[i].type,
      relatedDocuments: this.entries[i].relatedDocuments,
    };
  }
  openDeleteDialog(i) {
    this.indexToEditTo = i;
    this.entry = {
      id: this.entries[i].id,
      description: this.entries[i].description,
      date: this.entries[i].date,
      type: this.entries[i].type,
      relatedDocuments: this.entries[i].relatedDocuments,
    };
  }
  deleteTableRow() {
    this.presalesService.deleteHistory(this.entries[this.indexToEditTo].id).subscribe(() => {
        this.entries.splice(this.indexToEditTo, 1);
        this.triggerToast('Project history', 'Entry deleted successfully.', 'warning');
      },
      () => this.triggerToast('Project history', 'An error occurred deleting entry.', 'error')
    );
  }
  save() {
    if (this.htmlDialogLabel === 'Add new entry') {
      this.presalesService.addHistory(this.entry).subscribe( (resp: any) => {
          this.entry.id = resp.data.addHistory.id;
          this.entries.push(this.entry);
          this.triggerToast('Project history', 'Entry added successfully.', 'success');
        },
        () => this.triggerToast('Project history', 'An error occurred adding entry.', 'error'),
        () => {
          if (this.fileFormData) {
            this.presalesService.uploadFile(this.fileFormData, 'history', this.entry.id)
              .subscribe(
                data => this.triggerToast('Related document', 'File uploaded successfully.', 'success'),
                error => this.triggerToast('Related document', 'An error occurred uploading your file.', 'error')
              );
          }
        }
      );
    } else {
      this.presalesService.editHistory(this.entry).subscribe(
        () => {
          this.entries[this.indexToEditTo] = this.entry;
          this.triggerToast('Project history', 'Entry edited successfully.', 'success');
        },
        () => {
          this.triggerToast('Project history', 'An error occurred editing entry.', 'error');
        },
        () => {
          if (this.fileFormData) {
            this.presalesService.uploadFile(this.fileFormData, 'history', this.entry.id)
              .subscribe(
                data => this.triggerToast('Related document', 'File uploaded successfully.', 'success'),
                error => this.triggerToast('Related document', 'An error occurred uploading your file.', 'error')
              );
          }
        }
      );
    }
  }
  triggerToast(heading: string, text: string, icon: string) {
    $.toast({
      heading: heading,
      text: text,
      position: 'top-right',
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
  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.fileFormData = new FormData();
      this.fileFormData.append('name', file.name);
      this.fileFormData.append('path', file);
      this.entry.relatedDocuments.name = file.name;
    }
  }

  /*
  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('name', file.name);
      formData.append('path', file);
      this.triggerUploadingToast();
      this.presalesService.uploadFile(formData, 'history', this.entry.id)
        .subscribe(
          data => this.triggerToast('Related document', 'File uploaded successfully.', 'success'),
          error => this.triggerToast('Related document', 'An error occurred uploading your file.', 'error')
        );
    }
  }*/

}
