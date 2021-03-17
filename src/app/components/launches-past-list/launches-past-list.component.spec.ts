import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesPastListComponent } from './launches-past-list.component';

describe('LaunchesPastListComponent', () => {
  let component: LaunchesPastListComponent;
  let fixture: ComponentFixture<LaunchesPastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesPastListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesPastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
