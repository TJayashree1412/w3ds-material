import { Component, OnInit } from '@angular/core';
import { AdministratorServiceService } from 'src/app/service/administrator-service.service';
import { ParameterBean } from 'src/app/parameter-bean';

@Component({
  selector: 'app-add-ibmi',
  templateUrl: './add-ibmi.component.html',
  styleUrls: ['./add-ibmi.component.css']
})
export class AddIBMIComponent implements OnInit {
  headers: string[];
  countryMap: ParameterBean[] = [];
  resource: string;
  emailId: string;
  phone: string;
  faxNum: string;
  countryName: string;
  selectedValue: string;
  constructor(public administratorService: AdministratorServiceService) { }

  ngOnInit(): void {
    this.administratorService.getCountryMap().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      console.log(keys);
      this.headers =  keys.map(key => `${key}: ${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.countryMap.push(data);
      }
  });
  }
  saveContact(){
  }
}
