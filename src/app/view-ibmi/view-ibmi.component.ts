import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IBMIContact } from 'src/app/IBMIContact';
import { AdministratorServiceService } from '../service/administrator-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-ibmi',
  templateUrl: './view-ibmi.component.html',
  styleUrls: ['./view-ibmi.component.css']
})
export class ViewIBMIComponent implements OnInit {
  headers: string[];
  contactsList: IBMIContact[] = [];
  displayedColumns: string[] = ['resource', 'emailId', 'phone', 'faxNum']; //mat
  dataSource: any; //mat
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; //mat

  // public IBMIid: string;
  // @Output() send = new EventEmitter<string>();
  constructor(public administratorService: AdministratorServiceService, private router: Router) { }
 
  ngOnInit() {
    // this.getContactsList();
    this.administratorService.getIBMIContactsList().subscribe( (resp: any) => {
      this.contactsList = resp.body;
      this.dataSource = new MatTableDataSource<IBMIContact>(this.contactsList);
      this.dataSource.paginator = this.paginator;
      // console.log("inside contactsList function: ", this.contactsList);
    });
    // console.log("inside ngOninit", this.contactsList);
  }
  // getContactsList() {
    
  //   return this.contactsList;
  // }
  gotoContactDetails(url: string, id: string) {
    console.log([url, id]);
    // this.IBMIid = id;
    // this.send.emit(this.IBMIid);
    this.router.navigate([url, id]);

    // .then( (e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }
  addContact(url: string) {
    console.log([url]);
    this.router.navigate([url]);
  }

}
