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
  constructor(private mccservices: MccService) { }

  ngOnInit(): void {
    this.loadInitialSavedReportsdata();
  }

  loadInitialSavedReportsdata(): void {
    this.mccservices.getSavedReportsdata()
    .subscribe(data => this.report = data);
  }


}
