import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtteamHogwartsHousesComponent } from './artteam-hogwarts-houses.component';

describe('ArtteamHogwartsHousesComponent', () => {
  let component: ArtteamHogwartsHousesComponent;
  let fixture: ComponentFixture<ArtteamHogwartsHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtteamHogwartsHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtteamHogwartsHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
