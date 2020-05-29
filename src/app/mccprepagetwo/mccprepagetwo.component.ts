import { Component, OnInit } from '@angular/core';
import { MccService } from '../mccpre-landing-page/mccservice.service';
import {Reportpagetwovo} from './reportpagetwo-vo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-mccprepagetwo',
  templateUrl: './mccprepagetwo.component.html',
  styleUrls: ['./mccprepagetwo.component.css']
})
export class MccprepagetwoComponent implements OnInit {

  report: Reportpagetwovo [];
  oorg = '';
  reportorg: Reportpagetwovo [];
  expand: string ='f';
  
  constructor(private mccservices: MccService) { }

  ngOnInit(): void {
    this.loadInitialSavedReportsdata();
  }

  loadInitialSavedReportsdata(): void {
    this.mccservices.getSavedReportsdata()
    .subscribe(data => this.report = data);
  }

  setexpandtrue(): void {
   this.expand = 't';
  }
  
  setexpandfalse(): void {
    this.expand = 'f';
   }
 

  loadInitialSavedReportsdata2(): void {
    this.mccservices.getSavedReportsdataorg(this.oorg)
    .subscribe(data => this.reportorg = data);
  }
setorg(el): void {
this.oorg= el.getAttribute('reports-groupName')
}

onDrop(event: CdkDragDrop<string[]>){


  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}



}
