import { statusDescription } from './statusDescription';

export class Billing {
    bookingPaymentsInfo:bookingPaymentsInfo[] | undefined;
    totalAmountInfo:totalAmountInfo | undefined;
    qrUpdate:boolean | undefined;
    statusDescription:statusDescription | undefined;
} 

export class bookingPaymentsInfo {
    bookingPayment: bookingPayment | undefined;
    statusDescription: statusDescription | undefined;
}

export class bookingPayment {
    transactionId: string | undefined;
    totalAmount: string | undefined;
    paymentType: string | undefined;
    stayPeriod: number | undefined;
    bedTypeId: number | undefined;
    isAvailable : boolean | undefined;
    paymentNarration: string | undefined;
    masterBookingId: string | undefined;
    bookingAmountTotal: string | undefined;
    ratePerNight: string | undefined;
    securityDepositeAmount: string | undefined;
    minBookingAmount: string | undefined;
    balanceAmount: string | undefined;
    bookingId: string | undefined;
    tariffId: number | undefined;
    bookingAmount: string | undefined;
}

export class totalAmountInfo {
    minimumPayAmount: string | undefined;
    fullPayAmount: string | undefined;
    paymentType: string | undefined;
    securityDepositeAmount: string | undefined;
    bookingAmountTotal: string | undefined;
    rentAmountTotal: string | undefined;
}

export class billingsummary {
    CheckIn: string | undefined;
    Checkout: string | undefined;
    TotalNights: string | undefined;
    TotalBeds: number | undefined;
    BedAmount: string | undefined;
    ServiceTaxAmount: string | undefined;
    TotalFareAmount: string | undefined;
    securityDepositeAmount: string | undefined;
    bookingAmountTotal: string | undefined;
    rentAmountTotal: string | undefined;
    usersBookingMeta:any | undefined;
    locationid:number | undefined;
}