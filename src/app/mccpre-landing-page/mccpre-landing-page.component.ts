import { Component, OnInit } from '@angular/core';
import { MccService } from './mccservice.service';
import { ReportVO } from './report-vo';
import { SavedReportVO } from './saved-report-vo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mccpre-landing-page',
  templateUrl: './mccpre-landing-page.component.html',
  styleUrls: ['./mccpre-landing-page.component.css']
})
export class MCCPreLandingPageComponent implements OnInit {
  title = 'MCC Prep';
  report: ReportVO = {
    date: 'test',
    reportType: 'test'
  };
  

  savedReports: SavedReportVO[];

  constructor(private mccservices: MccService) { }

  ngOnInit(): void {
    this.loadInitialSavedReports();
  }




  processReportDate(): void {
    this.mccservices.processReportDate(this.report)
      .subscribe(data => {
        console.log(data);
        this.loadInitialSavedReports();
      });
  }
 

  loadInitialSavedReports(): void {
    this.mccservices.getSavedReports()
    .subscribe(data => this.savedReports = data);
  }
  onDrop(event: CdkDragDrop<string[]>){


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }


  }
}



