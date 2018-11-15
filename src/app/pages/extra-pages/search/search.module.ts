import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const SearchRoutes: Routes = [{
  path: '',
  component: SearchComponent,
  data: {
    heading: 'Search Result'
  }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
