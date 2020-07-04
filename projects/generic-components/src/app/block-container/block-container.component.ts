import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.scss']
})
export class BlockContainerComponent implements OnInit, AfterContentInit {

  @ContentChild('h5') private elRef: ElementRef | undefined;

  @Input() title: string = '';
  @Input() cardType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public clickMe(): void {
    console.log('Hello from block container');
  }

  ngAfterContentInit(): void {
    console.log(this.elRef);
  }

}
