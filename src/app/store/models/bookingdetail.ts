import { Location } from './location';
import { statusDescription } from './statusDescription';

export class Bookingdetail {
    statusDescription : statusDescription | undefined;
    bookingsInfo : bookingsInfo[] | undefined;
    netPendingAmount : string | undefined;
    qrUpdate : boolean | undefined;
}

export class bookingsInfo{
    bookingDetails : bookingDetails | undefined;
    location : Location | undefined;
}

class  bookingDetails {
    id : number | undefined;
    userId : number | undefined;
    masterBookingId: string | undefined;
    checkinDate: string | undefined;
    checkoutDate: string | undefined;
    requestDate: string | undefined;
    confirmDate: string | undefined;
    locationId : number | undefined;
    locationName: string | undefined;
    bookingStatus: string | undefined;
    paymentStatus: string | undefined;
    payMode: string | undefined;
    infoUpdateStatus: string | undefined;
    bedCount : number | undefined;
    stayPeriod: string | undefined;
    totalPaidAmount: string | undefined;
    balanceAmount: string | undefined;
    pendingPayments : pendingPayments[] | undefined;
    paidPayments : Payments[] | undefined;
    guests : guests[] | undefined;
    btPaymentsPayments: Payments[] | undefined;
    bookedBy: string | undefined;
    totalAmount: string | undefined;
    minPayAmount: string | undefined;
    paidAmount: string | undefined;
    securityAmount: string | undefined;
    bookingAmount: string | undefined;
    confirmedBy: string | undefined;
    qrCodeImage: string | undefined;
    bookingSource: string | undefined;
    pgwStatus: string | undefined;
    bankAccount: string | undefined;
    upiAdd: string | undefined;
    bankId : number | undefined;
    bookingClass : number | undefined;
    payInfo : payInfo | undefined;
}
 
class payInfo { 
    totalAmount : string | undefined;
    totalPaidAmount : string | undefined;
    balanceAmount : string | undefined;
    totalSecurityAmount : string | undefined;
    totalAmenitesAmount : string | undefined;
    totalPenlalitiesAmount : string | undefined;
    totalAmountBooking : string | undefined;
    pendingSecurityAmount : string | undefined;
    pendingAmenitesAmount : string | undefined;
    pendingPenlalitiesAmount : string | undefined;
    pendingAmountBooking : string | undefined;
    totalDiscountAmount : string | undefined;
}

class pendingPayments {
    id : number | undefined;
    userId : number | undefined;
    bookingId: string | undefined;
    masterBookingId: string | undefined;
    totalAmount: string | undefined;
    paidAmount: string | undefined;
    balanceAmount: string | undefined;
    paymentStatus: string | undefined;
    payMode: string | undefined;
    paymentType: string | undefined;
    dateTime: string | undefined;
    responseDateTime: string | undefined;
    paymentFor: string | undefined;
    refId : number | undefined;
    transactionId: string | undefined;
    description: string | undefined;
}

export class Payments {
    id : number | undefined;
    userId : number | undefined;
    locationId : number | undefined;
    transactionId: string | undefined;
    masterBookingId: string | undefined;
    totalAmount: string | undefined;
    paymentStatus: string | undefined;
    requestSource: string | undefined;
    payMode: string | undefined;
    paymentType: string | undefined;
    dateTime: string | undefined;
    responseDateTime: string | undefined;
    pgwStatus: string | undefined;
    rptTotalAmount: string | undefined;
    rptBalanceAmount: string | undefined;
    paymentNarration: string | undefined;
    receiptLink: string | undefined;
    payGw : payGw | undefined;
    paidAmount: string | undefined;
}

class payGw{
    id : number | undefined;
    dateTime: string | undefined;
    paymentSource: string | undefined;
    masterBookingId: string | undefined;
    paymentNarration: string | undefined;
    transactionpaymentstatus: string | undefined;
    transactionstatus: string | undefined;
    transactionid: string | undefined;
    amount: string | undefined;
    aptransactionid: string | undefined;
    message: string | undefined;
    customvar: string | undefined;
    customeremail: string | undefined;
    bankname: string | undefined;
    transactiontype: string | undefined;
    customer: string | undefined;
    chmod: string | undefined;
    terminalid: string | undefined;
    customerphone: string | undefined;
    cardissuer: string | undefined;
    authcode: string | undefined;
    rrn: string | undefined;
    pgwstatus: string | undefined;
}

export class guests {
    id : number | undefined;
    userId : number | undefined;
    transactionId : string | undefined;
    masterBookingId : string | undefined;
    bookingId : string | undefined;
    bedNumber : string | undefined;
    msisdn : string | undefined;
    name : string | undefined;
    lastname : string | undefined;
    gender : string | undefined;
    checkinDate : string | undefined;
    checkoutDate : string | undefined;
    requestDate : string | undefined;
    locationId : number | undefined;
    locationName : string | undefined;
    bookingStatus : string | undefined;
    infoUpdateStatus : string | undefined;
    bedCount : number | undefined;
    stayPeriod : string | undefined;
    bedtypeId : number | undefined;
    contactId : number | undefined;
    bookedBy : string | undefined;
    bedTypeName : string | undefined;
    ratePerNight : string | undefined;

}


export class userContacts{
    createdBy : string | undefined;
    docType : string | undefined;
    docsHttpsUrl : string | undefined;
    emergencyContactName : string | undefined;
    emergencyContactNumber : string | undefined;
    id: number | undefined;
    imageHttpsUrl : string | undefined;
    lastname : string | undefined;
    msisdn : string | undefined;
    msisdnVerified: number | undefined;
    name : string | undefined;
    status : string | undefined;
    userId : number | undefined;
}