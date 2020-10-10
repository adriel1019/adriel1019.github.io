import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderHouseComponent } from './leader-house.component';

describe('LeaderHouseComponent', () => {
  let component: LeaderHouseComponent;
  let fixture: ComponentFixture<LeaderHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
