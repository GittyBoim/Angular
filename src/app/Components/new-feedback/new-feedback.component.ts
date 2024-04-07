import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Feedback } from 'src/app/classes/feedback';
import { EventsService } from 'src/app/Services/events.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export class NewFeedbackComponent implements OnInit,OnDestroy {

  subscription:Subscription=new Subscription;

  feedback = new FormGroup({
    name:new FormControl("",[Validators.pattern('[a-zA-Zא-ת ]*')]),
    email:new FormControl("",[Validators.email,Validators.required]),
    content:new FormControl("",[Validators.required])
  });
  newFeedback:Feedback={};
  constructor(public httpSer:HttpService,public eventsSer:EventsService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.newFeedback={Name:`${this.feedback.value.name}`,Email:`${this.feedback.value.email}`,Description:`${this.feedback.value.content}`, Like:0};
    console.log(this.feedback.value.name);
    this.subscription=this.httpSer.addFeedback(this.newFeedback).subscribe();
    alert("תגובתך נשמרה במערכת");
    this.feedback.reset();
    this.eventsSer.gift$.next("נוספו לך 10 נקודות");
  }
}
