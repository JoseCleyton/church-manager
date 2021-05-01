import { MenuComponent } from './../menu/menu.component';
import { FeatureComponent } from './feature.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [FeatureComponent, MenuComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatToolbarModule
  ],
})
export class FeatureModule {}
