import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvViewDialogComponent } from './cv-view-dialog.component';

describe('CvViewDialogComponent', () => {
  let component: CvViewDialogComponent;
  let fixture: ComponentFixture<CvViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
