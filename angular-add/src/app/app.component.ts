import { RefDirective } from './directives/ref.directive';
import { ModalComponent } from './modal/modal.component';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective, { static: false }) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Angular tags');
    this.meta.addTags([
      {name: 'keywords', content: 'angular, google, appcomponent'},
      {name: 'descroption', content: 'this is app component'}
    ]);
  }

  // test = () => null;

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'Dynamic title';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
