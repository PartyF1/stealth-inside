import type { IRegistrationData } from "../../../../shared/types/registration";

export interface IStepData {
  onChange: (value: IRegistrationData) => void;
  form: IRegistrationData;
}
