import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtTeamHogwartsHousesRoutingModule } from './artteam-hogwarts-houses-routing.module';
import { ArtteamHogwartsHousesComponent } from './components/artteam-hogwarts-houses/artteam-hogwarts-houses.component';
import { LeaderHouseComponent } from './components/leader-house/leader-house.component';
import { StudentListComponent } from './components/student-list/student-list.component';



@NgModule({
  declarations: [
    ArtteamHogwartsHousesComponent,
    LeaderHouseComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    ArtTeamHogwartsHousesRoutingModule
  ]
})
export class ArtteamHogwartsHousesModule { }
