import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Services } from 'src/app/classes/services';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit,OnDestroy {
  
  title: string="";
  service:any={};
  subscription:Subscription=new Subscription;

  constructor(public httpSer:HttpService,public route:ActivatedRoute) {
    this.subscription=route.params.subscribe(params => {
      this.title=params["Title"];
      this.httpSer.getAllServices().subscribe(services => {
        this.service=services.find(s => s.Title==this.title);
      })
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
