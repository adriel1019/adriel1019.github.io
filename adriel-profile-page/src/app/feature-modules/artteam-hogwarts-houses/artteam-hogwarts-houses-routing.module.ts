import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtteamHogwartsHousesComponent } from './components/artteam-hogwarts-houses/artteam-hogwarts-houses.component';

const routes: Routes = [
    {
        path: '',
        component: ArtteamHogwartsHousesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ArtTeamHogwartsHousesRoutingModule {}
