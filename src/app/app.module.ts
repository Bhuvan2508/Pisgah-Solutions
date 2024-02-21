import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { WebdevelopmentComponent } from './components/webdevelopment/webdevelopment.component';
import { MobiledevelopmentComponent } from './components/mobiledevelopment/mobiledevelopment.component';
import { SoftwaredevelopmentComponent } from './components/softwaredevelopment/softwaredevelopment.component';
import { DigitalmarktingComponent } from './components/digitalmarkting/digitalmarkting.component';
import { IOTdevelopmentComponent } from './components/iotdevelopment/iotdevelopment.component';
import { ItconsultingComponent } from './components/itconsulting/itconsulting.component';
import { ItstaffingComponent } from './components/itstaffing/itstaffing.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Signup2Component } from './components/signup2/signup2.component';
import { Signup3Component } from './components/signup3/signup3.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { TestComponent } from './components/test/test.component'
import { CoursesComponent } from './components/courses/courses.component';
import { CloudcomputingComponent } from './components/cloudcomputing/cloudcomputing.component';
import { CybersecurityComponent } from './components/cybersecurity/cybersecurity.component';
import { FsdComponent } from './components/fsd/fsd.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';



@NgModule({
  declarations: [
     AppComponent,
    HomeComponent,
   SliderComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent, 
        WebdevelopmentComponent,
        MobiledevelopmentComponent,
        SoftwaredevelopmentComponent,
        DigitalmarktingComponent,
        IOTdevelopmentComponent,
        ItconsultingComponent,
        ItstaffingComponent,
        SliderComponent,
        LoginComponent,
        SignupComponent,
        Signup2Component,
        Signup3Component,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        TestComponent,
        CoursesComponent,
        FsdComponent,
        CloudcomputingComponent,
        CybersecurityComponent,
        ThankyouComponent,
       
                            
      ],
   
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
