import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersubcomponentComponent } from './othersubcomponent.component';

describe('OthersubcomponentComponent', () => {
  let component: OthersubcomponentComponent;
  let fixture: ComponentFixture<OthersubcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
