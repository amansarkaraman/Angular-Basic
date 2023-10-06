import { Component, ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneSubOneComponent } from './child-one-sub-one/child-one-sub-one.component';
import { ChildOneSubTwoComponent } from './child-one-sub-two/child-one-sub-two.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'children-one',
        component: ChildOneComponent,
        children: [
          {
            path: 'sub-one',
            component: ChildOneSubOneComponent,
          },
          {
            path: 'sub-two',
            component: ChildOneSubTwoComponent,
          },
        ],
      },
      {
        path: 'children-two',
        component: ChildTwoComponent,
      },
    ],
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
