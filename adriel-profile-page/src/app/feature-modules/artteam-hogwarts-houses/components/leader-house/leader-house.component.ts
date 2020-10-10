import { Component, Input, OnInit } from '@angular/core';
import { HouseData } from '../../models/house-data/house-data.model';
import { MemberData } from '../../models/member-data/member-data.model';
import { HouseService } from '../../services/house/house.service';
import { MembersService } from '../../services/members/members.service';

@Component({
  selector: 'app-leader-house',
  templateUrl: './leader-house.component.html',
  styleUrls: ['./leader-house.component.scss']
})
export class LeaderHouseComponent implements OnInit {

  @Input() houseId: number;
  houseData: HouseData;
  memberLeaderData: MemberData;
  imgSrc: string;
  constructor(public houseDataService: HouseService,
              public membersDataService: MembersService) {
  }
  ngOnInit(): void {    
    this.houseData = this.houseDataService.getHouseDataFromId(this.houseId);
    this.memberLeaderData = this.membersDataService.getLeaderMemberData(this.houseId);
    console.log(this.memberLeaderData);
    
    const imgSource = './../../../../../assets/images/art-team-members/houses-leaders/' + this.memberLeaderData.imageSrc + '.jpeg';
    console.log(imgSource);
    
    this.imgSrc = imgSource;
  }

}
