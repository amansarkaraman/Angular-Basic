import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneSubOneComponent } from './child-one-sub-one.component';

describe('ChildOneSubOneComponent', () => {
  let component: ChildOneSubOneComponent;
  let fixture: ComponentFixture<ChildOneSubOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOneSubOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOneSubOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
