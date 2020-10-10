import { Injectable } from '@angular/core';
import { HouseData } from '../../models/house-data/house-data.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

    private mHouseDataList: HouseData[] = [
        {
            id: 1,
            name: 'Gryffindor',
            color: 'red',
        },
        {
            id: 2,
            name: 'Hupplepuff',
            color: 'yellow'
        },
        {
            id: 3,
            name: 'Slytherin',
            color: 'green',
        },
        {
            id: 4,
            name: 'Ravenclaw',
            color: 'blue',
        }
    ];

    constructor() { }

    getAllHousesData(): HouseData[] {
        return this.mHouseDataList;
    }

    getHouseData(name: string): HouseData {
        this.mHouseDataList.forEach((house) => {
            if (house.name === name) {
                return house;
            }
        });

        return null;
    }

    getHouseDataFromId(id: number): HouseData {
        let result = null;
        this.mHouseDataList.forEach((house) => {
            if (result !== null) {
                return;
            }

            if (house.id === id) {              
                result = house;
            }
        });

        return result;
    }
}
