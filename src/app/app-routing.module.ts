import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { WebdevelopmentComponent } from './components/webdevelopment/webdevelopment.component';
import { SoftwaredevelopmentComponent } from './components/softwaredevelopment/softwaredevelopment.component';
import { MobiledevelopmentComponent } from './components/mobiledevelopment/mobiledevelopment.component';
import { ItstaffingComponent } from './components/itstaffing/itstaffing.component';
import { ItconsultingComponent } from './components/itconsulting/itconsulting.component';
import { IOTdevelopmentComponent } from './components/iotdevelopment/iotdevelopment.component';
import { DigitalmarktingComponent } from './components/digitalmarkting/digitalmarkting.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { Signup3Component } from './components/signup3/signup3.component';
import { TestComponent } from './components/test/test.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CloudcomputingComponent } from './components/cloudcomputing/cloudcomputing.component';
import { CybersecurityComponent } from './components/cybersecurity/cybersecurity.component';
import { FsdComponent } from './components/fsd/fsd.component';
import { OneComponent } from './components/one/one.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'webdevelopment', component: WebdevelopmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'softwaredevelopment', component: SoftwaredevelopmentComponent },
  { path: 'mobiledevelopment', component: MobiledevelopmentComponent },
  { path: 'itstaffing', component: ItstaffingComponent },
  { path: 'itconsulting', component: ItconsultingComponent },
  { path: 'iotdevelopment', component: IOTdevelopmentComponent },
  { path: 'digitalmarkting', component: DigitalmarktingComponent },
  { path: 'signup2', component: Signup2Component },
  { path: 'signup3', component: Signup3Component },
  { path: 'test', component: TestComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'fsd', component: FsdComponent },
  { path: 'cloudcomputing', component: CloudcomputingComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'thankyou', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
