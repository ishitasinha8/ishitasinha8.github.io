import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { TravelComponent } from './travel/travel.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "projects", component: PublicationsComponent},
  {path: "travel", component:TravelComponent},
  {path: "profile", component:WorkComponent},
  // {path: '**', component: PageNotFoundComponent}
];

