import { PageNamePipe } from './page-name.pipe';
import { ColorDirective } from './color.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  exports: [
    ColorDirective,
    PageNamePipe
  ]
})
export class SharedModule {

}
