import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    MovieCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieCardComponent, 
    ButtonComponent
  ]
})
export class SharedModule { }
