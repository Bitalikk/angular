import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AboutExtraPageComponent } from './about-extra-page/about-extra-page.component';
import { AboutPageComponent } from './about-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutPageComponent, AboutExtraPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPageComponent,
        children: [{ path: 'extra', component: AboutExtraPageComponent }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {}
