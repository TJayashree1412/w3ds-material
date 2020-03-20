import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username:string
  profilePic:any;

  constructor(private router:Router ) {}

  ngOnInit() {
   
    console.log("sessionStorage.getItem(loggeduser)"+sessionStorage.getItem("loggeduser"));
    let user = sessionStorage.getItem("loggeduser");
    console.log("user is :::" ,user);
    this.username = user;
    console.log(this.username);
    this.profilePic="https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/"+sessionStorage.getItem("loggeduser");
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
