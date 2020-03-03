import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username:string

  constructor(private router:Router ) {}

  ngOnInit() {
   
    console.log("sessionStorage.getItem(loggeduser)"+sessionStorage.getItem("loggeduser"));
    let user = sessionStorage.getItem("loggeduser");
    console.log("user is :::" ,user);
    this.username = user;
    console.log(this.username);
  }
  SignOut(){
    sessionStorage.clear();
    this.router.navigate(['/Login']);
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
