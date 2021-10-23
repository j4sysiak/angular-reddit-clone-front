import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'] // , encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('in constructor');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    console.log('in ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('in ngOnInit');
  }

  ngDoCheck(): void {
    console.log('in ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('in ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('in ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('in ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('in ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('in ngOnDestroy');
  }

}
