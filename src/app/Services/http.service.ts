import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../classes/feedback';
import { Services } from '../classes/services';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  env=environment;

  constructor(private http:HttpClient) {}

  getAllFeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.env.URL + '/feedback');
  }
  getAllServices():Observable<Services[]>{
    return this.http.get<Services[]>(this.env.URL +'/Services');
  }
  addFeedback(feedback:Feedback):Observable<Feedback[]>{
    return this.http.post<Feedback[]>(this.env.URL + '/feedback',feedback);
  }
  addLike(id:number):Observable<Feedback[]>{
    return this.http.put<Feedback[]>(this.env.URL + '/feedback/'+id,id);
  }
}
