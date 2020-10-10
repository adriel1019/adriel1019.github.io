import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house/house.service';
import { MembersService } from '../../services/members/members.service';

@Component({
  selector: 'app-artteam-hogwarts-houses',
  templateUrl: './artteam-hogwarts-houses.component.html',
  styleUrls: ['./artteam-hogwarts-houses.component.scss']
})
export class ArtteamHogwartsHousesComponent implements OnInit {

  constructor(public houseDataService: HouseService,
              public membersDataService: MembersService) { }

  ngOnInit(): void {
  }

}
