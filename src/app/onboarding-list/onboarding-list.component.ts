import { Component, OnInit,ViewChild } from '@angular/core';
import { OnboardingService } from '../onboardingService';
import { Onboard } from '../Onboard';
@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.css']
})
export class OnboardingListComponent implements OnInit {
  headers :String[];
  onboardList : Onboard[] = [];
  pendingLandedList : Onboard[] = [];
  esignAwaitingList : Onboard[] = [];
  p:any;
  q:any;
  r:any;

  constructor (public onboardingService: OnboardingService ) {}

  ngOnInit() {
      this.getOnboardedList();
      this.getPendingLandedList();
      this.getEmpSignAwaitingList();
     
    }
    

    async getOnboardedList() {
      this.onboardingService.getOnboardedList()
        .subscribe(resp => {
          console.log(resp);
          const keys = resp.headers.keys();
          this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
          for (const data of resp.body) {
            this.onboardList.push(data);
          }
          console.log(this.onboardList);
        });
    }

    async getPendingLandedList() {
      this.onboardingService.getPendingLandedList()
        .subscribe(resp => {
          console.log(resp);
          const keys = resp.headers.keys();
          this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
          for (const data of resp.body) {
            this.pendingLandedList.push(data);
          }
          console.log(this.pendingLandedList);
        });
    }

    async getEmpSignAwaitingList() {
      this.onboardingService.getEmpSignAwaitingList()
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        for (const data of resp.body) {
            this.esignAwaitingList.push(data);
          }
          console.log(this.esignAwaitingList);
        });
    }
     
  }
