import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannersComponent } from './banners.component';

@NgModule({
  declarations: [BannersComponent],
  imports: [SharedModule],
  exports: [BannersComponent],
})
export class BannersModule {}
