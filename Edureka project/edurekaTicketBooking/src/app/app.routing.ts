import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDetailsComponent } from "../app/components/user/passenger-details/passenger-details.component";
import { HomepageComponent } from "../app/components/user/homepage/homepage.component";
import { SearchDetailsComponent } from "../app/components/user/search-details/search-details.component";
import { BusDetailsComponent } from "./components/user/bus-details/bus-details.component";
import { ReviewDetailsComponent } from "./components/user/review-details/review-details.component";

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'searchDetails', component: SearchDetailsComponent },
    { path: 'busDetails', component: BusDetailsComponent },
    { path: 'passengerDetails', component: PassengerDetailsComponent },
    { path: 'viewBusTicket', component: ReviewDetailsComponent },
    { path: '**', redirectTo: '' }
    
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
