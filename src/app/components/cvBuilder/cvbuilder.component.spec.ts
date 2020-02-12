import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVBuilderComponent } from './cvbuilder.component';

describe('CVBuilderComponent', () => {
  let component: CVBuilderComponent;
  let fixture: ComponentFixture<CVBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
