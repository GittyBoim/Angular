import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { GaleryComponent } from './Components/galery/galery.component';
import { ContantUsComponent } from './Components/contant-us/contant-us.component';
import {HttpClientModule} from '@angular/common/http';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { MyServicesComponent } from './Components/my-services/my-services.component';
import { ServiceComponent } from './Components/service/service.component';
import { NotFoundComponentComponent } from './Components/not-found-component/not-found-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewFeedbackComponent } from './Components/new-feedback/new-feedback.component';
import { NamePipe } from './Pipes/name.pipe';
import { PictureSizeDirective } from './Directives/picture-size.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GaleryComponent,
    ContantUsComponent,
    FeedbackComponent,
    MyServicesComponent,
    ServiceComponent,
    NotFoundComponentComponent,
    NewFeedbackComponent,
    NamePipe,
    PictureSizeDirective,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
