import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProgramComponent } from './course-program.component';

describe('CourseProgramComponent', () => {
  let component: CourseProgramComponent;
  let fixture: ComponentFixture<CourseProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
