import { Component, Input, OnInit } from '@angular/core';
import { MemberData } from '../../models/member-data/member-data.model';
import { MembersService } from '../../services/members/members.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() houseId: number;
  studentsHouseList: MemberData[];

  constructor(public membersDataService: MembersService) {
  }
  
  ngOnInit(): void {
    this.studentsHouseList = this.getStudentsHouseList(this.houseId);
  }

  private getStudentsHouseList(houseId: number): MemberData[] {
    if (houseId === 1) {
      return this.membersDataService.getYellowHouseMembers();
    }

    else if (houseId === 2) {
      return this.membersDataService.getRedHouseMembers();
    }

    else if (houseId === 3) {
      return this.membersDataService.getGreenHouseMembers();
    }

    return this.membersDataService.getBlueHouseMembers();
  }
}
