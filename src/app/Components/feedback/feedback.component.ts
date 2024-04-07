import { Component, OnDestroy, OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { Feedback } from 'src/app/classes/feedback';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit,OnDestroy {

  feedbacks:Feedback[]=[];
  subscription1:Subscription=new Subscription;
  subscription2:Subscription=new Subscription;

  constructor(public httpSer:HttpService) { }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription1=this.httpSer.getAllFeedback().subscribe((data)=>{
      this.feedbacks=data;
    });
  }
  addLike(id:any){
    this.subscription2=this.httpSer.addLike(id).subscribe(data=> this.feedbacks=data);
  }
}
