import { Injectable, APP_ID } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
// import { ShortProfile } from "./app.component"
// import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

// import { RedProfile } from './red-profile';
// import {Assignment} from './Assignment';
import { Key } from 'protractor';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { VariableAst } from '@angular/compiler';
import { MinLengthValidator } from '@angular/forms';
import { parseHttpResponse } from 'selenium-webdriver/http';
@Injectable()
export class DataService {
  private actionUrl: string;
  response: any;
  //response: {};
  UserId: String;
  Pwd: String;


//http://faces.tap.ibm.com/imagesrv/05947T744.jpg?s=115
  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }


  async authenticate(userID: string, password: string): Promise<any> {
    // alert('hello');
    console.log("authenticate:"+userID + "password:"+password);
    let status: any = false;
    this.UserId = userID;
    this.Pwd = password;
    await this.http.post(this.actionUrl + "/login",
      {
        /*"username": this.encrUserId,
        "password": this.encrPwd*/
        "userName": userID,
        "password": password
      },{responseType: 'text'}
      
      ).toPromise()
      .then(
        data => {
          console.log("POST Request is successful ", data);
          //this.response = data.json();
          this.response = JSON.parse(data);
          console.log("POST Request is successful ", JSON.parse(data));
        },
        error => {
          console.log("Error in authenticate", error);
          status = false;
        }
      );
    return this.response;
  }
}
