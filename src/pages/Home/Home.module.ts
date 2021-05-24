import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomePageRoutingModule } from './Home.routing.module';
import { HomePage } from './Home.page';
import { NavbarComponent, WelcomeComponent, AboutUsComponent, ServicesComponent, CryptolandComponent, PacksComponent, OwnExpertsComponent, ContactUsComponent } from 'src/components';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';

const components = [
  HomePage, 
  NavbarComponent,
  WelcomeComponent, 
  AboutUsComponent, 
  ServicesComponent, 
  CryptolandComponent, 
  PacksComponent, 
  OwnExpertsComponent, 
  ContactUsComponent
]

@NgModule({
  imports: [
    CommonModule, 
    HomePageRoutingModule, 
    IvyCarouselModule
  ],
  declarations: [...components],
  exports: [HomePage],
  providers: [],
  bootstrap: [],
  entryComponents:[...components ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class HomePageModule {}
