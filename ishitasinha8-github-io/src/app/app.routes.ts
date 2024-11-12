import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { TravelComponent } from './travel/travel.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  {path: "", component: HomeComponent, title: "Ishita Sinha"},
  {path: "projects", component: PublicationsComponent, title: "Ishita Sinha - Projects"},
  {path: "photos", component:TravelComponent, title: "Ishita Sinha - Photos"},
  {path: "profile", component:WorkComponent, title: "Ishita Sinha - Profile"},
  // {path: '**', component: PageNotFoundComponent}
];

