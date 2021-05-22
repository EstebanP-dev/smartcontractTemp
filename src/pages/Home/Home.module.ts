import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './Home.routing.module';
import { HomePage } from './Home.page';
import { NavbarComponent, WelcomeComponent } from 'src/components';

@NgModule({
  declarations: [HomePage, NavbarComponent, WelcomeComponent],
  imports: [HomePageRoutingModule],
  exports: [HomePage],
  providers: [],
  bootstrap: [],
})
export class HomePageModule {}
