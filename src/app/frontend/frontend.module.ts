import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FrontLandingComponent } from './front-landing/front-landing.component';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";



@NgModule({
  declarations: [
    FrontendComponent,
    HeaderComponent,
    FooterComponent,
    FrontLandingComponent,    
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
  ]
})
export class FrontendModule { }
