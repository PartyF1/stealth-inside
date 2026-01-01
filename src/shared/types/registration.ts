import type { BUSINESS_STEPS, SHOPPER_STEPS } from "./enums";
import type { UserType } from "./user";

export interface IBusinessRegistrationData {
  id?: string;
  type: UserType;
  email: string;
  password: string;
  approvePassword: string;
  name: string;
  scopeOfActivity: string;
  region: string;
  contacts: string;
  egrulExtractNumber: string;
  registrationCertificateNumber: string;
  inn: string;
  powerOfAttorney: string;
  currentStep: BUSINESS_STEPS;
}

export interface IUserRegistrationData {
  id?: string;
  type: UserType;
  email: string;
  password: string;
  approvePassword: string;
  name: string;
  location: string;
  birthDate: string;
  currentStep: SHOPPER_STEPS;
}
