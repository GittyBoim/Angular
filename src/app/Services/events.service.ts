import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feedback } from '../classes/feedback';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  gift$:BehaviorSubject<string>=new BehaviorSubject("הוספת תגובה תזכה אותך ב 10 נקודות");
  constructor(public httpSer:HttpService) { }


}
