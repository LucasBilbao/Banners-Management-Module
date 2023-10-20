import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannersModule } from '../banners/banners.module';

const components = [MainComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: [components],
  imports: [SharedModule, CommonModule, BannersModule],
  exports: [components],
})
export class StructureModule {}
