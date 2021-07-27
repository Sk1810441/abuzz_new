import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {BreadcrumbModule} from 'angular-crumbs';

import { JpImagePreloadModule } from '@jaspero/ng-image-preload';
//import {NgDynamicBreadcrumbModule} from 'ng-dynamic-breadcrumb';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { profileRepository } from './store/repositories/profile.repository';
import { LocationRepository } from './store/repositories/location.repository';
import { BookingHistoryRepository } from './store/repositories/bookinghistory.repository';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { reducers ,metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PaymentDetailsListComponent } from './templates/components/payment-details-list/payment-details-list.component';

//import { MaterialModule } from './sharemodule/material.module';

//components 

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/components/header/header.component';
import { FooterComponent } from './templates/components/footer/footer.component';
import { LocationComponent } from './templates/layouts/location/location.component';
import { hostelComponent } from './templates/layouts/hostel/hostel.component';
import { hostellistComponent } from './templates/containers/hostellist/hostellist.component';
import { hostelcardComponent } from './templates/components/hostelcard/hostelcard.component';
import { ErrorComponent } from './templates/components/error/error.component';
import { LoaderComponent } from './templates/components/loader/loader.component';
import { PagenotfoundComponent } from './templates/components/pagenotfound/pagenotfound.component';
import { LocationfilterComponent } from './templates/components/locationfilter/locationfilter.component';
import { LoginComponent } from './templates/components/login/login.component';
// import { SigninComponent } from './templates/components/signin/signin.component';
// import { SigninotpComponent } from './templates/components/signinotp/signinotp.component';
// import { SigninsuccessComponent } from './templates/components/signinsuccess/signinsuccess.component';

import { CarouselComponent } from './templates/components/carousel/carousel.component';
import { AbouthostelComponent } from './templates/components/abouthostel/abouthostel.component';
import { HostelfeaturesComponent } from './templates/components/hostelfeatures/hostelfeatures.component';
import { HostelroomsComponent } from './templates/components/hostelrooms/hostelrooms.component';
import { HostelneighbourhoodComponent } from './templates/components/hostelneighbourhood/hostelneighbourhood.component';
import { BookingComponent } from './templates/layouts/booking/booking.component';
import { BookingsummaryComponent } from './templates/components/bookingsummary/bookingsummary.component';
import { GuestdetailComponent } from './templates/components/guestdetail/guestdetail.component';
import { FullscreenloaderComponent } from './templates/components/fullscreenloader/fullscreenloader.component';

import { LoginoptComponent } from './templates/components/loginopt/loginopt.component';
import { LoginphonenoComponent } from './templates/components/loginphoneno/loginphoneno.component';
import { SignupComponent } from './templates/components/signup/signup.component';
import { ForgotpasswordComponent } from './templates/components/forgotpassword/forgotpassword.component';

import { BookinglistComponent } from './templates/containers/bookinglist/bookinglist.component';
import { PaymentstatusComponent } from './templates/components/paymentstatus/paymentstatus.component';
import { ProfileComponent } from './templates/layouts/profile/profile.component';
import { BookinghistoryComponent } from './templates/layouts/bookinghistory/bookinghistory.component';


//bootstrap components

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './templates/layouts/home/home.component';
import { UserdetailComponent } from './templates/components/userdetail/userdetail.component';
import { UserprofileComponent } from './templates/components/userprofile/userprofile.component';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BookingdetaillistComponent } from './templates/components/bookingdetaillist/bookingdetaillist.component';
import { BookingstatusComponent } from './templates/components/bookingstatus/bookingstatus.component';
import { BookingdetailComponent } from './templates/layouts/bookingdetail/bookingdetail.component';
import { PaymentdetailsComponent } from './templates/components/paymentdetails/paymentdetails.component';
import { BookingguestdetailsComponent } from './templates/components/bookingguestdetails/bookingguestdetails.component';
import { AddguestComponent } from './templates/components/addguest/addguest.component';
import { EditProfileComponent } from './templates/popup/edit-profile/edit-profile.component';
import { LocationrouterComponent } from './templates/routercomponents/locationrouter/locationrouter.component';
import { HostelrouterComponent } from './templates/routercomponents/hostelrouter/hostelrouter.component';
import { ProfilerouterComponent } from './templates/routercomponents/profilerouter/profilerouter.component';
import { BookinghistoryrouterComponent } from './templates/routercomponents/bookinghistoryrouter/bookinghistoryrouter.component';
import { DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CancelconfirmationComponent } from './templates/popup/cancelconfirmation/cancelconfirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    hostelComponent,
    hostellistComponent,
    hostelcardComponent,
    ErrorComponent,
    LoaderComponent,
    PagenotfoundComponent,
    LocationfilterComponent,
    LoginComponent,
    CarouselComponent,
    AbouthostelComponent,
    HostelfeaturesComponent,
    HostelroomsComponent,
    HostelneighbourhoodComponent,
    BookingComponent,
    BookingsummaryComponent,
    GuestdetailComponent,
    FullscreenloaderComponent,
    LoginoptComponent,
    LoginphonenoComponent,
    SignupComponent,
    ForgotpasswordComponent,
    BookinglistComponent,
    PaymentstatusComponent,
    ProfileComponent,
    BookinghistoryComponent,
    HomeComponent,
    UserdetailComponent,
    UserprofileComponent,
    BookingdetaillistComponent,
    BookingdetailComponent,
    BookingstatusComponent,
    PaymentdetailsComponent,
    BookingguestdetailsComponent,
    AddguestComponent,
    EditProfileComponent,
    PaymentDetailsListComponent,
    LocationrouterComponent,
    HostelrouterComponent,
    ProfilerouterComponent,
    BookinghistoryrouterComponent,
    CancelconfirmationComponent,
    // SigninComponent,
    // SigninotpComponent,
    // SigninsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    BreadcrumbModule,
    //NgDynamicBreadcrumbModule,
    JpImagePreloadModule.forRoot(),
    NgMultiSelectDropDownModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      progressBar: true,
    }),
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    LocationRepository,
    profileRepository,
    BookingHistoryRepository,
    DatePipe,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('911140139433-k9ikclje55st6a0c5mn0s5fk5h2kpcd1.apps.googleusercontent.com')
            //provider: new GoogleLoginProvider('clientId')
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
