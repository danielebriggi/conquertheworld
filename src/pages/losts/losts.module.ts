import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostsPage } from './losts';

@NgModule({
  declarations: [
    LostsPage,
  ],
  imports: [
    IonicPageModule.forChild(LostsPage),
  ],
})
export class LostsPageModule {}
