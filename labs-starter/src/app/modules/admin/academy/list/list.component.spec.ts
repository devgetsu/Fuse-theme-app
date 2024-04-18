import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyListComponent } from './list.component';

describe('AcademyListComponent', () => {
  let component: AcademyListComponent;
  let fixture: ComponentFixture<AcademyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademyListComponent]
    });
    fixture = TestBed.createComponent(AcademyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
