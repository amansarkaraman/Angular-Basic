import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoSubTwoComponent } from './child-two-sub-two.component';

describe('ChildTwoSubTwoComponent', () => {
  let component: ChildTwoSubTwoComponent;
  let fixture: ComponentFixture<ChildTwoSubTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoSubTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoSubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
