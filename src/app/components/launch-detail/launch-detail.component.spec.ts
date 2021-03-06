import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailComponent } from './launch-detail.component';

describe('LaunchesPastListComponent', () => {
  let component: LaunchDetailComponent;
  let fixture: ComponentFixture<LaunchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
