import { MenuComponent } from './../menu/menu.component';
import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [FeatureComponent, MenuComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule
  ],
})
export class FeatureModule {}
