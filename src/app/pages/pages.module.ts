import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HomeComponent, MoviesComponent],
  imports: [CommonModule, HttpClientModule, ComponentsModule, BrowserAnimationsModule],
  exports: [HomeComponent, MoviesComponent]
})
export class PagesModule {}
