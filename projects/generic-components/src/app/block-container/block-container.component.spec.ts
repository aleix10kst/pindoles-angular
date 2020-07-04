import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockContainerComponent } from './block-container.component';

describe('BlockContainerComponent', () => {
  let component: BlockContainerComponent;
  let fixture: ComponentFixture<BlockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
