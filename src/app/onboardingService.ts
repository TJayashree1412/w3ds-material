import { Injectable } from '@angular/core';
import { Onboard } from './Onboard';
import { Observable } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OnboardingService{
    private actionUrl: string;
  response: any;

  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }

    getOnboardedList() : Observable <HttpResponse<Onboard[]>> {
        
          return this.http.get<Onboard[]>(
            this.actionUrl+"/onboardedList/", { observe: 'response' });
        }
      getPendingLandedList() : Observable <HttpResponse<Onboard[]>> {
         
              
            return this.http.get<Onboard[]>(
              this.actionUrl+"/pendingLandedList/", { observe: 'response' });
          }
        getEmpSignAwaitingList() : Observable <HttpResponse<Onboard[]>>{
         
          return this.http.get<Onboard[]>(this.actionUrl+"/awaitingESignList/",{ observe: 'response'});
        }
}