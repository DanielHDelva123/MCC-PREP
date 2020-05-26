import { Component, OnInit } from '@angular/core';
import { MccService } from '../mccpre-landing-page/mccservice.service';
import {Reportpagetwovo} from './reportpagetwo-vo';

@Component({
  selector: 'app-mccprepagetwo',
  templateUrl: './mccprepagetwo.component.html',
  styleUrls: ['./mccprepagetwo.component.css']
})
export class MccprepagetwoComponent implements OnInit {
  report: Reportpagetwovo [];
  oorg = '';
  reportorg: Reportpagetwovo [];
  constructor(private mccservices: MccService) { }

  ngOnInit(): void {
    this.loadInitialSavedReportsdata();
  }

  loadInitialSavedReportsdata(): void {
    this.mccservices.getSavedReportsdata()
    .subscribe(data => this.report = data);
  }



  loadInitialSavedReportsdata2(): void {
    this.mccservices.getSavedReportsdataorg(this.oorg)
    .subscribe(data => this.reportorg = data);
  }
setorg(el): void {
this.oorg= el.getAttribute('reports-groupName')
}

}
