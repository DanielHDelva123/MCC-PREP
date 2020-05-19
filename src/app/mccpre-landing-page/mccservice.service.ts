import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReportVO } from './report-vo';
import { HttpParams } from "@angular/common/http";;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SavedReportVO } from './saved-report-vo';
@Injectable({
  providedIn: 'root'
})
export class MccService {

  private mccBaseUrl = 'http://localhost:8080/mcc/v1/';  // URL to web api
  constructor(private httpClient: HttpClient) { }

  public processReportDate(d1: ReportVO): Observable<string> {
    return this.httpClient.post<string>(this.mccBaseUrl + 'start-new', d1);
  }

  public getSavedReports(): Observable<SavedReportVO[]> {
    return this.httpClient.get<SavedReportVO[]>(this.mccBaseUrl + 'get/saved-reports');
  }
}
