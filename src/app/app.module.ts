import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCCPreLandingPageComponent } from './mccpre-landing-page/mccpre-landing-page.component';
import { MccprepagetwoComponent } from './mccprepagetwo/mccprepagetwo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleWithProviders} from "@angular/core";
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';


import { MatCheckboxModule } from '@angular/material/checkbox';



import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MCCPREPComponent } from './mccprep/mccprep.component';
import {MatCardModule} from '@angular/material/card'
import {DragDropModule} from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    MCCPreLandingPageComponent,
    MccprepagetwoComponent,
    MCCPREPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        DragDropModule,
        MatCardModule,
        MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
