import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';


const routes: Routes = [
    {
        path: "",
        component: FrontendComponent,
        data: { addDynamicChild: true },
        children: [
            {
                path: "",
                pathMatch: "full",
                loadChildren: () =>
                  import("./home/home.module").then((m) => m.HomeModule),
            },
            {
                path: "about-us",                
                loadChildren: () =>
                  import("./about-us/about-us.module").then((m) => m.AboutUsModule),
            },
            {
                path: "contact-us",                
                loadChildren: () =>
                  import("./contact-us/contact-us.module").then((m) => m.ContactUsModule),
            },
              
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
