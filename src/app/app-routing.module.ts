import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CityComponent } from './city/city.component';
import { RoomComponent } from './room/room.component';


const routes: Routes = [
  {path: 'admin/cinema', component: CinemaComponent  },
  {path: 'admin/city', component: CityComponent  },
  {path: 'admin/room', component: RoomComponent  },

  {path: 'cinemas', component: CinemasComponent  },


  {path: '', redirectTo: 'cinemas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
