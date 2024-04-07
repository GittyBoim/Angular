import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContantUsComponent } from './Components/contant-us/contant-us.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { GaleryComponent } from './Components/galery/galery.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { NewFeedbackComponent } from './Components/new-feedback/new-feedback.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { ServiceComponent } from './Components/service/service.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contantUs",component:ContantUsComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"galery",component:GaleryComponent},
  {path:"MyServices",component:MyServicesComponent,children:[
    {path:"service/:Title",component:ServiceComponent},
  ]},
  {path:"newFeedback",component:NewFeedbackComponent},
  {path:"**",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
