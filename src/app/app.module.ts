import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';




const appRoute:Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent}

] 

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AbcComponent]
})
export class AppModule { }
