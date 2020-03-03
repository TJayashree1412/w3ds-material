import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isUserAuthenticated(): boolean{
    console.log("sessionStorage.getItem(isAuthenticated)" ,sessionStorage.getItem("isAuthenticated") )
    if (sessionStorage.getItem("isAuthenticated") === "true") {      
      return true;      
      } else{
        return false;
      }
  }

}
