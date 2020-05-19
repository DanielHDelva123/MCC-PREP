import { Component, OnInit } from '@angular/core';
import {MccService } from '../mccservice.service';
import {report} from '../report';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-mccpre-landing-page',
  templateUrl: './mccpre-landing-page.component.html',
  styleUrls: ['./mccpre-landing-page.component.css']
})
export class MCCPreLandingPageComponent implements OnInit {
Reportstart = 'Start a New Report';
or ='OR';
Resume = 'Resume a Saved Report'
date:string ='';
testdata: report[] 

reportType: string = '';
r: report[];
re: report = {
  date: "",
  reportType: ""
};

constructor(private Mccservices: MccService) { }

  ngOnInit(): void {
    
  }
 
  onSelect(): void {
    
    this.postrequest()
  
 
    alert(this.re.date +"  " + this.re.reportType);
    
  }
     
     
      postrequest():void {
      this.Mccservices.sendPostRequestWithParameters2(this.re)
      .subscribe(reportaa => this.testdata = reportaa);
      alert('post request sent')
      }


    }


