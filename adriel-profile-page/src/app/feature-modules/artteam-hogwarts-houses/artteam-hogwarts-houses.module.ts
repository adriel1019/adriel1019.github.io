import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtTeamHogwartsHousesRoutingModule } from './artteam-hogwarts-houses-routing.module';
import { ArtteamHogwartsHousesComponent } from './components/artteam-hogwarts-houses/artteam-hogwarts-houses.component';
import { LeaderHouseComponent } from './components/leader-house/leader-house.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { MembersService } from './services/members/members.service';
import { HouseService } from './services/house/house.service';



@NgModule({
  declarations: [
    ArtteamHogwartsHousesComponent,
    LeaderHouseComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    ArtTeamHogwartsHousesRoutingModule
  ],
  providers: [
    MembersService,
    HouseService
  ]
})
export class ArtteamHogwartsHousesModule { }
