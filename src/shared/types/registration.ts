import type { BUSINESS_STEPS } from "./enums";

export interface IRegistrationData {
  email: string;
  password: string;
  approvePassword: string;
  companyName: string;
  scopeOfActivity: string;
  region: string;
  contacts: string;
  // Данные для аккредитации компании
  egrulExtractNumber: string; // Номер выписки ЕГРЮЛ
  registrationCertificateNumber: string; // Номер свидетельства о регистрации
  inn: string; // ИНН
  powerOfAttorney: string; // Доверенность
  currentStep: BUSINESS_STEPS;
}
