import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { report } from './report';
import { HttpParams } from "@angular/common/http";;
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MccService {
  date:string;
  reportType:string;
  e:string;
  

  private MCCUrl = 'http://localhost:8080/mcc/v1/start-new';  // URL to web api
  constructor(private httpClient: HttpClient) { } 
report:report;
 
public sendPostRequestWithParameters2(d1:report): Observable<report[]> {    
  

  
  
  
  
   //this.httpClient.post ("http://localhost:8080/mcc/v1/start-new", d1)
   //alert(d1)
  alert("service recieved value for date:" +d1.date)
  alert("service recieved value for reportype:" +d1.reportType)
  return this.httpClient.post <report[]>("http://localhost:8080/mcc/v1/start-new", d1);

}

 





public sendGETRequestWithParameters(d:string , r:string): Observable<report []> {    
 let params = new HttpParams();
  params = params.append(this.date,d);
 params = params.append(this.reportType, r);
  
  
  
  
return this.httpClient.post <report[]>("http://localhost:8080/mcc/v1/start-new", {params: params});
}

 sendPostRequesttest(data: any, data2:any): Observable<any> {
  
  
  return this.httpClient.post<any>("http://localhost:8080/mcc/v1/start-new", data,data2);
}




}
