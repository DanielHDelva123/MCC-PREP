import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MccprepagetwoComponent } from './mccprepagetwo/mccprepagetwo.component';
import {MCCPreLandingPageComponent } from './mccpre-landing-page/mccpre-landing-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/mccpre-landing-page', pathMatch: 'full' },
  { path: 'mccpre-landing-page', component: MCCPreLandingPageComponent },

  { path: 'mccprepagetwo', component: MccprepagetwoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
