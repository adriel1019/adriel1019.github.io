import { Injectable } from '@angular/core';
import { MemberData } from '../../models/member-data/member-data.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private mMembersDataList: MemberData[] = [
    {
      name: 'Daniel Nava',
      houseId: 1,
      isLeader: true,
      imageSrc: 'Dan'
    },
    {
      name: 'Dany Mapachin',
      houseId: 2,
      isLeader: true,
      imageSrc: 'Dany'
    },
    {
      name: 'Pam Jajou',
      houseId: 3,
      isLeader: true,
      imageSrc: 'Pam'
    },
    {
      name: 'Lore Robles',
      houseId: 4,
      isLeader: true,
      imageSrc: 'Lore'
    },
    {
      name: 'Adriel Madrigal',
      houseId: 4,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Cris Finn',
      houseId: 2,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Rafa Hernandez',
      houseId: 2,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Bertha Odohui',
      houseId: 4,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Samara',
      houseId: 1,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'David Mendoza',
      houseId: 3,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Vania Torres',
      houseId: 3,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Mary',
      houseId: 4,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Wicho',
      houseId: 2,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Panda',
      houseId: 3,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Sharky',
      houseId: 3,
      isLeader: false,
      imageSrc: ''
    },
    {
      name: 'Chuy',
      houseId: 1,
      isLeader: false,
      imageSrc: ''
    }
  ];
  constructor() { }

  public getLeaderMemberData(houseId: number): MemberData {
    
    let leaderData: MemberData = null;

    this.mMembersDataList.forEach((member: MemberData) => {

      if (leaderData !== null) {
        return;
      }

      if (member.houseId === houseId && member.isLeader === true) {
        leaderData = member;
        
        return;
      }
    });
    
    return leaderData;
  }

  public getYellowHouseMembers(): MemberData[] {
    return this.getMembersFromHouseId(1);
  }

  public getRedHouseMembers(): MemberData[] {
    return this.getMembersFromHouseId(2);
  }

  public getGreenHouseMembers(): MemberData[] {
    return this.getMembersFromHouseId(3);
  }
  
  public getBlueHouseMembers(): MemberData[] {
    return this.getMembersFromHouseId(4);
  }

  private getMembersFromHouseId(houseId: number): MemberData[] {
    
    let listMembers: MemberData[] = [];

    this.mMembersDataList.forEach((member: MemberData) => {
      if (member.houseId === houseId) {
        listMembers.push(member);
      }
    })

    return listMembers;
  }
}
