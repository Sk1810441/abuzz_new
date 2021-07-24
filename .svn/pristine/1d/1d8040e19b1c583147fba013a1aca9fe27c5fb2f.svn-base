import { statusDescription } from './statusDescription';

export class Payment {
    bookingPaymentsInfo:bookingPaymentsInfo[] | undefined;
    totalAmountInfo:totalAmountInfo | undefined;
    statusDescription:statusDescription | undefined;
    payGW:payGW | undefined;
}

export class bookingPaymentsInfo{
    bookingPayment:bookingPayment | undefined;
    statusDescription:statusDescription | undefined;
}

export class bookingPayment{
    userId : number | undefined;
    transactionId : string | undefined;
    masterBookingId : string | undefined;
    totalAmount : string | undefined;
    minBookingAmount : string | undefined;
    balanceAmount : string | undefined;
    bookingAmountTotal : string | undefined;
    paymentType : string | undefined;
    tariffType : string | undefined;
    stayPeriod : number | undefined;
    bedTypeId : number | undefined;
    isAvailable : boolean | undefined;
    tariffId : number | undefined;
    ratePerNight : string | undefined;
    securityDepositeAmount : string | undefined;
}

export class totalAmountInfo{
    minimumPayAmount : string | undefined;
    fullPayAmount : string | undefined;
    transactionId : string | undefined;
    paymentType : string | undefined;
    securityDepositeAmount : string | undefined;
    bookingAmountTotal : string | undefined;
}

export class payGW{
    buyerEmail : string | undefined;
    buyerPhone : string | undefined;
    buyerFirstName : string | undefined;
    buyerLastName : string | undefined;
    buyerAddress : string | undefined;
    buyerCity : string | undefined;
    buyerState : string | undefined;
    buyerCountry : string | undefined;
    buyerPinCode : string | undefined;
    chmod : any | undefined;
    amount : string | undefined;
    orderid : string | undefined;
    privatekey : string | undefined;
    mercid : string | undefined;
    checksum : string | undefined;
    currency : string | undefined;
    isocurrency : string | undefined;
    kittype : string | undefined;
    customvar : any | undefined;
    txnsubtype : any | undefined;
    paymentURL : string | undefined;
}