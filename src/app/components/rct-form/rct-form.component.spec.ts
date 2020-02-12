import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RctFormComponent } from './rct-form.component';

describe('RctFormComponent', () => {
  let component: RctFormComponent;
  let fixture: ComponentFixture<RctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
