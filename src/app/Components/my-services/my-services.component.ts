import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Services } from 'src/app/classes/services';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit,OnDestroy {

  services:Services[]=[];
  subscription:Subscription=new Subscription;
  constructor(public httpSer:HttpService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
      this.subscription=this.httpSer.getAllServices().subscribe((data)=>{
        this.services=data;
        console.log(data);
    });
  }

}
