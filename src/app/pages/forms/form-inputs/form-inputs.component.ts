import { ListmailService } from './../../../listmail.service';
import { ListMail } from './../../../@core/data/listmail';
import { Observable, Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/of';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit{
  starRate = 2;
  heartRate = 4;
  // AddMail(subject:string,name:string,mail:string,message:string){
  //   subject=subject.trim();
  //   name=name.trim();
  //   mail=mail.trim();
  //   message=message.trim();

  // }
  log(x) {console.log(x);}
  readonly ROOT_URL="http://localhost:3000/email"
  emails: Observable<any>;
  constructor(private listmailService: ListmailService){
    
  }
  creatMailFromService(Email: string, Messages: string, Name: string, Subject: string): void{
    this.listmailService.createMail(Email, Messages, Name, Subject);
  }
  ngOnInit(){
    
  }
  // constructor(private http: HttpClient){

  // }
  // createMail(Email: string,Messages:string,Name: string,Subject: string){
  //   const data: ListMail = {
  //     id: null,
  //     name: Name,
  //     subject: Subject,
  //     messages: Messages,
  //     email: Email
  //   }
  //   //  console.log(data);
  //    this.http.post<any>(this.ROOT_URL,data).subscribe(value => {this.newEmail=value;alert("Your Mail is Sending...!")});
  // }
 
}
