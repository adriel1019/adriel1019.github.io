import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtTeamHogwartsHousesRoutingModule } from './artteam-hogwarts-houses-routing.module';
import { ArtteamHogwartsHousesComponent } from './components/artteam-hogwarts-houses/artteam-hogwarts-houses.component';



@NgModule({
  declarations: [
    ArtteamHogwartsHousesComponent
  ],
  imports: [
    CommonModule,
    ArtTeamHogwartsHousesRoutingModule
  ]
})
export class ArtteamHogwartsHousesModule { }
