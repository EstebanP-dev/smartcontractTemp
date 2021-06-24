import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MemberPageRoutingModule } from './Member.routing.module';
import { MemberPage } from './Member.page';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountSlidebarComponent, PlanCardsComponent, CompensationPlansComponent } from 'src/components';
import { ClipboardModule } from '@angular/cdk/clipboard';

const components = [MemberPage, AccountSlidebarComponent, PlanCardsComponent, CompensationPlansComponent,];

@NgModule({
  imports: [
    CommonModule,
    MemberPageRoutingModule,
    FontAwesomeModule,
    ClipboardModule,
  ],
  declarations: [...components],
  exports: [MemberPage],
  providers: [],
  bootstrap: [],
  entryComponents: [...components],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MemberPageModule {}
