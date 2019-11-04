import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ElementRef,
  ContentChild,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Output
} from '@angular/core';
import { Post } from './../app.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() post: Post;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', { static: true }) infoRef: ElementRef;


  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
