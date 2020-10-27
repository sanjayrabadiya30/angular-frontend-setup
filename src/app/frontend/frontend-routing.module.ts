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
              
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
