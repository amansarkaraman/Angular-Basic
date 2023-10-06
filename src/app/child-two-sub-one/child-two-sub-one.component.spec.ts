import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoSubOneComponent } from './child-two-sub-one.component';

describe('ChildTwoSubOneComponent', () => {
  let component: ChildTwoSubOneComponent;
  let fixture: ComponentFixture<ChildTwoSubOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwoSubOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoSubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
