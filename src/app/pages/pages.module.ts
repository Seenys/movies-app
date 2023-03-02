import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, MoviesComponent],
  imports: [CommonModule, HttpClientModule, ComponentsModule],
  exports: [HomeComponent, MoviesComponent]
})
export class PagesModule {}
