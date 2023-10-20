import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { LoaderComponent } from './components/loader/loader.component';

// Pipe
import { PunctuatePipe } from './pipes/punctuate/punctuate.pipe';

// Angular material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

const components = [
  SearchFilterComponent,
  BannerCardComponent,
  LoaderComponent,
];
const pipes = [PunctuatePipe];
const materialModules = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatPaginatorModule,
  MatChipsModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule, materialModules, FormsModule],
  exports: [components, materialModules, pipes, CommonModule],
})
export class SharedModule {}
