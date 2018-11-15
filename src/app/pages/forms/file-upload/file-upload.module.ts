import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import {SharedModule} from '../../../shared/shared.module';

export const FileUploadRoutes: Routes = [{
  path: '',
  component: FileUploadComponent,
  data: {
    breadcrumb: 'File Upload'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FileUploadRoutes),
    SharedModule
  ],
  declarations: [FileUploadComponent]
})
export class FileUploadModule { }
