import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneSubOneComponent } from './child-one-sub-one/child-one-sub-one.component';
import { ChildOneSubTwoComponent } from './child-one-sub-two/child-one-sub-two.component';
import { ChildTwoSubOneComponent } from './child-two-sub-one/child-two-sub-one.component';
import { ChildTwoSubTwoComponent } from './child-two-sub-two/child-two-sub-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildOneSubOneComponent,
    ChildOneSubTwoComponent,
    ChildTwoSubOneComponent,
    ChildTwoSubTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
