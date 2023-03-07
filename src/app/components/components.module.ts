import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ItemsBannerComponent } from './items-banner/items-banner.component';

@NgModule({
  declarations: [SliderComponent, ItemsBannerComponent],
  imports: [CommonModule],
  exports: [SliderComponent, ItemsBannerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
