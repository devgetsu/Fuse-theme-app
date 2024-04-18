import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyDetailsComponent } from './details.component';

describe('AcademyDetailsComponent', () => {
  let component: AcademyDetailsComponent;
  let fixture: ComponentFixture<AcademyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademyDetailsComponent]
    });
    fixture = TestBed.createComponent(AcademyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
