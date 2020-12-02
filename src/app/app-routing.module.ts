import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontLandingComponent } from './frontend/front-landing/front-landing.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    pathMatch: "prefix",
    children: [      
      {
        path: "",
        loadChildren: () =>
          import("./admin/admin.module").then((b) => b.AdminModule),
      },      
    ],
  },
  {
    path: "",
    component: FrontLandingComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./frontend/frontend.module").then((b) => b.FrontendModule),
        data: { addDynamicChild: true },
      },      
    ],
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
