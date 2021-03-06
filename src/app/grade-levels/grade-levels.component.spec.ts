import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelsComponent } from './grade-levels.component';

describe('GradeLevelsComponent', () => {
  let component: GradeLevelsComponent;
  let fixture: ComponentFixture<GradeLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
