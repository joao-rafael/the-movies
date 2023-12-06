import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
