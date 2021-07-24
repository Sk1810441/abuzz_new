import { statusDescription } from './statusDescription';

export class AllLocation {
    Location: Location | undefined;
    statusDescription: statusDescription | undefined;
} 

export class Location {
    id:number | undefined;
    aboutUs:string | undefined;
    cityId:number | undefined;
    state:string | undefined;
    locationName:string | undefined;
    status:string | undefined;
    stateCode:string | undefined;
    city:string | undefined;
    address1:string | undefined;
    address2:string | undefined;
    contactNumber:string | undefined;
    googleMapURL:string | undefined;
    imagesList:string[] | undefined;
    imagesFList:string[] | undefined;
    imagesMList:string[] | undefined;
    email:string | undefined;
    latitude:string | undefined;
    longitude:string | undefined;
    isBedAvailable:boolean | undefined;
    gendersAvailable:string[] | undefined;
    currentgender:string | undefined;
    bedTypesList : bedTypesList[] | undefined;
    bankDetails: bankDetails[] | undefined;
    tariffList : tariffList[] | undefined;
    addonAmenitiesMetadatas : addonAmenitiesMetadatas[] | undefined;
    nearByList : nearByList[] | undefined;
}

export class bedTypesList{
    id: number | undefined;
    bedPosition: string | undefined;
    imagesList: string[] | undefined;
    bedTypeName: string | undefined;
    bedFor :string | undefined;
    displayName:string | undefined;
    imageDeactive:string | undefined;
    image:string | undefined;
}

export class bankDetails{
    id:number | undefined;
    locationId:number | undefined;
    locationName:string | undefined;
    bankName:string | undefined;
    accountNo:string | undefined;
    beneficiaryName:string | undefined;
    address:string | undefined;
    ifscCode:string | undefined;
    upiId:string | undefined;
    status:string | undefined;
    accountNo2:string | undefined;
    upiId2:string | undefined;
}


export class tariffList{
    activeFromDate: string | undefined;
    activeTillDate: string | undefined;
    bedType: string | undefined;
    bedTypeId: number | undefined;
    bookingType: string | undefined;
    checkinTime: string | undefined;
    checkoutTime: string | undefined;
    discount: string | undefined;
    effRate: string | undefined;
    graceDays: number | undefined;
    id: number | undefined;
    locationId: number | undefined;
    locationName: string | undefined;
    minBookingAmount: number | undefined;
    minStayForGrace: number | undefined;
    rate: string | undefined;
    security: number | undefined;
    securityAmount: string | undefined;
    status:string | undefined;
    tariffName: string | undefined;
    tariffSource: string | undefined;
    tariffType: string | undefined;
    tax: string | undefined;
}

export class addonAmenitiesMetadatas{
    id: number | undefined;
    locationId: number | undefined;
    amenityName: string | undefined;
    amount: string | undefined;
    duration: string | undefined;
    imagesList: string[] | undefined;
    refundable: string | undefined;
}

export class nearByList{
    id: number | undefined;
    locationId: number | undefined;
    placement: string | undefined;
    category: string | undefined;
    distance: string | undefined;
    name: string | undefined;
    description: string | undefined;
    googleMapURL: string | undefined;
    status: string | undefined;
}