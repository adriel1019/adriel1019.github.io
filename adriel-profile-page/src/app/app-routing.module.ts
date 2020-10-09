import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'artteam-hogwarts-houses',
    loadChildren: () => import('./feature-modules/artteam-hogwarts-houses/artteam-hogwarts-houses.module')
                          .then(m => m.ArtteamHogwartsHousesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./feature-modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
