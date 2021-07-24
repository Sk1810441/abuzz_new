import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { BookingdetailComponent } from './templates/layouts/bookingdetail/bookingdetail.component';
import { PagenotfoundComponent } from './templates/components/pagenotfound/pagenotfound.component';
import { PaymentstatusComponent } from './templates/components/paymentstatus/paymentstatus.component';
import { BookingComponent } from './templates/layouts/booking/booking.component';
import { BookinghistoryComponent } from './templates/layouts/bookinghistory/bookinghistory.component';
import { HomeComponent } from './templates/layouts/home/home.component';
import { hostelComponent } from './templates/layouts/hostel/hostel.component';
import { LocationComponent } from './templates/layouts/location/location.component';
import { ProfileComponent } from './templates/layouts/profile/profile.component';
import { LocationrouterComponent } from './templates/routercomponents/locationrouter/locationrouter.component';
import { HostelrouterComponent } from './templates/routercomponents/hostelrouter/hostelrouter.component';
import { ProfilerouterComponent } from './templates/routercomponents/profilerouter/profilerouter.component';
import { BookinghistoryrouterComponent } from './templates/routercomponents/bookinghistoryrouter/bookinghistoryrouter.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  
  { path: 'location', component: LocationrouterComponent ,  data: { breadcrumb: 'Locations'},
    children : [ 
      {path: '', component: LocationComponent , data: { breadcrumb: 'Location'} },
      {path: 'hostel/:locationid', component: HostelrouterComponent , data: { breadcrumb: 'Hostel'},
        children : [
          { path: '', component: hostelComponent , data: { breadcrumb: 'Hostel'} },
          { path: 'booking/:locationid', component: BookingComponent , data: { breadcrumb: 'Booking'}},
        ],
      },
      { path: 'booking/:locationid', component: BookingComponent , data: { breadcrumb: 'Booking'}},
    ],
  },

  { path: 'profile', component: ProfilerouterComponent ,canActivate: [AuthGuard] , data: { breadcrumb: 'Profile'},
    children : [ 
      {path: '', component: ProfileComponent ,canActivate: [AuthGuard] , data: { breadcrumb: 'Profile'} },
      {path: 'bookinghistory', component: BookinghistoryrouterComponent ,canActivate: [AuthGuard] , data: { breadcrumb: 'BookingHistory'},
        children : [
          { path: '', component: BookinghistoryComponent ,canActivate: [AuthGuard] , data: { breadcrumb: 'BookingHistory'} },
          { path: 'bookingdetail/:masterBookingId', component: BookingdetailComponent ,canActivate: [AuthGuard] , data: { breadcrumb: 'BookingDetail'}  },
        ],
      },
    ],
  },

  { path: 'paymentstatus/:status', component: PaymentstatusComponent ,canActivate: [AuthGuard] },  

  //{ path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: '**',component: PagenotfoundComponent }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true },)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
