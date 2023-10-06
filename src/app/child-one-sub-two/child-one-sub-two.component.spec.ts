import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneSubTwoComponent } from './child-one-sub-two.component';

describe('ChildOneSubTwoComponent', () => {
  let component: ChildOneSubTwoComponent;
  let fixture: ComponentFixture<ChildOneSubTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOneSubTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOneSubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
