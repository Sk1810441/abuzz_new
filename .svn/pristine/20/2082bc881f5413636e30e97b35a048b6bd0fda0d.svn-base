import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { bedTypesList } from 'src/app/store/models/location';
import { ToastrService } from 'ngx-toastr';
import { BillingService } from '../../../store/services/billing.service';
import { Billing , billingsummary} from '../../../store/models/billing';
import { environment } from '../../../../environments/environment';
import { AuthService } from 'src/app/store/services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-guestdetail',
  templateUrl: './guestdetail.component.html',
  styleUrls: ['./guestdetail.component.css']
})
export class GuestdetailComponent implements OnInit {

  @Input() bedTypesList:bedTypesList[] | undefined;
  @Input() genderlist:string[] | undefined;
  @Input() locationID:any;

  @ViewChildren('guestno') guestno: ElementRef[] | undefined;
  @ViewChildren('genderradio') genderradio: ElementRef[] | undefined;
  
  @Output() getbilldetails  = new EventEmitter<billingsummary>();

  constructor(private modalService: BsModalService,private toastr: ToastrService , private BillingService:BillingService,private AuthService: AuthService) { }
  
  modalRef: BsModalRef | undefined;
  isLoading:boolean = false;
  guestSeat:any;
  GuestNumber:string[] | undefined;
  guestCount:number = 0;
  noOfNights:number = 0;
  bookingfor:string | undefined;
  minDate:Date = new Date();
  startDate:Date = new Date();
  endDate:Date = new Date();
  bedId: any = [];
  GuestNumberArray:any[] = [];
  currentbedTypesList:bedTypesList[] | undefined;
  currentbedid:number | undefined;
  Billing:Billing |undefined;
  source = environment.source;
  iserror : string | undefined;

  billingsummary:billingsummary = {
    CheckIn: undefined,
    Checkout:undefined,
    TotalNights:undefined,
    TotalBeds: undefined,
    BedAmount:undefined,
    ServiceTaxAmount:undefined,
    TotalFareAmount:undefined,
    usersBookingMeta:undefined,
    locationid:undefined,
    securityDepositeAmount:undefined,
    bookingAmountTotal:undefined,
    rentAmountTotal:undefined,

  };

  ngOnInit(): void {
    this.guestSeat = [{ "id": 1 },{ "id": 2 },{ "id": 3 },{ "id": 4 },{ "id": 5 },{ "id": 6 },];
    this.minDate.setDate(this.minDate.getDate());
  }

  dateRange($event:any) {  
    this.guestCount = 0;
    this.GuestNumber = [];
    this.GuestNumberArray = [];
    this.bedId = [];
    this.startDate = $event[0].toJSON().split('T')[0];  
    this.endDate = $event[1].toJSON().split('T')[0];  
    if(this.startDate == this.endDate){
      this.toastr.error('check-in & check-out can not be same', '', { timeOut: 3000,});
    }
    this.noOfNights = Number(((new Date(this.endDate).getTime() - new Date(this.startDate).getTime()) / (1000 * 3600 * 24)));
    this.Billing = undefined;
    this.sendSummaryDetail();
  } 

  genderChange(){
    if(this.guestno){
      [...this.guestno].forEach((inp) => {
        inp.nativeElement.checked = false;
      });
    } 
    this.currentbedTypesList = this.bedTypesList?.filter(x => String(x.bedFor).toUpperCase() == String(this.bookingfor).toUpperCase());
    if(!this.noOfNights){
      this.bookingfor = undefined;
      if(this.genderradio){
        [...this.genderradio].forEach((inpgender) => {
          inpgender.nativeElement.checked = false;
        });
      } 
    }
    this.noOfGuest(0);
  }

  noOfGuest(event: any) {
    this.guestCount = 0;
    this.GuestNumber = [];
    this.GuestNumberArray = [];
    this.bedId = [];

    if(!this.noOfNights){
      this.toastr.error('Please select check-in & check-out', '', { timeOut: 3000,});
      return;
    }
    if(!this.bookingfor){
      this.toastr.error('Please Select Gender', '', { timeOut: 3000,});
      if(this.guestno){
        [...this.guestno].forEach((inp) => {
          inp.nativeElement.checked = false;
        });
      } 
      return;
    }
    if(!this.AuthService.isLogin()){
      if(event){
        this.modalRef = this.modalService.show(LoginComponent);
        this.modalRef.content.modalRef=  this.modalRef;
      }
      if(this.guestno){
        [...this.guestno].forEach((inp) => {
          inp.nativeElement.checked = false;
        });
      } 
      return;
    }
    if(this.currentbedTypesList){
      for (let currentbedTypesList of  this.currentbedTypesList) {
        if(currentbedTypesList.bedFor == this.bookingfor){
          this.currentbedid = currentbedTypesList.id;
          break;
        }
      }
    }
    for (let i = 1; i <= event; i++) {
      this.GuestNumber.push(String(i));
      this.GuestBedType(this.currentbedid,i,0);
    }
    this.guestCount = this.GuestNumber.length;
    if(event){
      this.getPriceDetail();
    }else{
      this.Billing = undefined;
      this.sendSummaryDetail();
    }

  }

  GuestBedType(event: any ,GuestNumber:any, formselect:number = 0){
    let GuestNumberPresent = this.GuestNumberArray.find((x:any) => String(x.GuestNumber) == String(GuestNumber));
    let bed = this.bedId.find((x: any) => x.bedTypeId == event);
    if(bed){
      let index = this.bedId.indexOf(bed);
      bed.bedCount = bed.bedCount + 1;
      this.bedId[index] = bed;
    }else{
      this.bedId.push({ "bedTypeId": event, "bedCount": 1 });
    }
    if(GuestNumberPresent){
      let bed = this.bedId.find((x: any) => x.bedTypeId == GuestNumberPresent.bedTypeId);
      let index = this.bedId.indexOf(bed);
      bed.bedCount = bed.bedCount - 1;
      this.bedId[index] = bed;
      let indexGuestNumberPresent = this.bedId.indexOf(GuestNumberPresent);
      GuestNumberPresent.bedTypeId = event;
      this.GuestNumberArray[indexGuestNumberPresent] = GuestNumberPresent;
    }else{
      this.GuestNumberArray.push({"bedTypeId": event , "GuestNumber":GuestNumber});
    }
    this.bedId = this.bedId.filter((x:any) => x.bedCount != 0);
    if(formselect){
      this.getPriceDetail();
    }

  }

  getPriceDetail(){
    this.isLoading = true;
    let checkInDate = this.startDate + " 12:00:00";
    let checkOutDate = this.endDate + " 11:00:00";
    let userId = Number(this.AuthService.getuserid());
    let token = this.AuthService.getjwtToken();
    let obj;
    obj = {
      "strCheckinDate": checkInDate,
      "strCheckOutDate": checkOutDate,
      "usersBookingMeta": this.bedId,
      "source":this.source,
      "jwtToken":token,
    }

    this.BillingService.getbills(obj,userId,this.locationID).subscribe(
      data => {
        this.Billing = data;  
        this.iserror = undefined; 
        if(this.Billing?.statusDescription?.statusCode != 200){
          this.iserror = this.Billing?.statusDescription?.statusMessage;
          this.toastr.error(this.Billing?.statusDescription?.statusMessage, '', { timeOut: 5000,});
          // this.noOfGuest(0);
          // this.isLoading = false;
          // return;
        }
        this.sendSummaryDetail();
        this.isLoading = false;
      },
      error => {
        this.noOfGuest(0);
        this.toastr.error("Somethings wents wrong", '', { timeOut: 5000,});
        // console.log(error);
        this.isLoading = false;
      }
    )

  }

  sendSummaryDetail(){
    var days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    var startDate = new Date(this.startDate);
    var endDate = new Date(this.endDate);
    var startDateday = (days[startDate.getDay() - 1]);
    var endDateday = (days[endDate.getDay() - 1]);

    if(this.billingsummary){
      this.billingsummary['CheckIn']= startDateday +","+ this.startDate;
      this.billingsummary['Checkout']= endDateday +","+ this.endDate;
      this.billingsummary['TotalNights']= String(this.noOfNights);
      this.billingsummary['TotalBeds']= this.guestCount;
      this.billingsummary['BedAmount']=  this.Billing?.totalAmountInfo?.rentAmountTotal;
      this.billingsummary['TotalFareAmount']= this.Billing?.totalAmountInfo?.fullPayAmount;
      this.billingsummary['securityDepositeAmount']= this.Billing?.totalAmountInfo?.securityDepositeAmount;
      this.billingsummary['usersBookingMeta']= this.bedId;
      this.billingsummary['locationid']= this.locationID;
      this.billingsummary['ServiceTaxAmount']= undefined;
      this.billingsummary['bookingAmountTotal']= undefined;
      this.billingsummary['rentAmountTotal']= undefined;
    }
    this.getbilldetails.emit(this.billingsummary);
  }

  bedStatus(GuestNumber:string){
    const GuestNumberArray = this.GuestNumberArray.find( x => x.GuestNumber == GuestNumber);
    if(this.Billing?.bookingPaymentsInfo){
      const GuestBilled = this.Billing.bookingPaymentsInfo.find( x => x.bookingPayment?.bedTypeId == GuestNumberArray.bedTypeId );
      if(GuestBilled?.statusDescription?.statusCode != 200){
        return "Beds are not available. Please modify your search";
        //return this.Billing?.statusDescription?.statusMessage;
      }else{
        if(GuestBilled?.bookingPayment?.ratePerNight){
          return "₹ "+GuestBilled?.bookingPayment?.ratePerNight +" per night";
        }else{
          return "Beds are not available. Please modify your search";
        }
      }
    }
    return "Beds are not available. Please modify your search";
   // return this.Billing?.statusDescription?.statusMessage;
  }

  openbedimageslider(GuestNumber:any){
    this.modalRef = this.modalService.show(CarouselComponent);
    let GuestNumberArray = this.GuestNumberArray.find(x => x.GuestNumber == GuestNumber);
    let bedTypeId = GuestNumberArray.bedTypeId;
    let bedTypesList = this.bedTypesList?.find(x => x.id == bedTypeId);
    this.modalRef.content.imagesList=  bedTypesList?.imagesList;
    this.modalRef.content.uniqueid = 0;
  }

}
