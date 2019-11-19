import { Directive, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit  {

  @HostBinding('style.color') color: string;

  ngOnInit() {
    this.color = '#aaa';
  }
}
