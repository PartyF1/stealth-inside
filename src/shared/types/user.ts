export enum UserType {
  MYSTERY_SHOPPER = "mystery_shopper",
  BUSINESS = "business",
}

export interface BusinessUserDetails {
  scopeOfActivity: string;
  region: string;
  contacts: string;
  egrulExtractNumber: string;
  registrationCertificateNumber: string;
  inn: string;
  powerOfAttorney: string;
}

export interface User {
  id: string;
  email: string;
  type: UserType;
  token: string;
  name: string;
  details: BusinessUserDetails | Record<string, unknown>;
}
