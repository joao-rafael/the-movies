import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './core/pages/details/details.component';
import { MainComponent } from './core/pages/main/main.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }