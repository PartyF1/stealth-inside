import { DefaultForm } from "../../../../components/Form";
import { Dimension, REPORT_STEPS } from "../../../../shared/types/enums";
import type { IReport } from "../../../../shared/types/report";
import { Button, ButtonType } from "../../../../shared/ui/Button";
import type { IStepData } from "../../../RegistrationPage/businessRegistration/steps/types";
import { ButtonContainer } from "../../../RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { serviceData } from "./dataField";

export const useServiceQuality = ({ form, onChange }: IStepData<IReport>) => {
  return {
    header: <></>,
    content: (
      <DefaultForm onChange={onChange} formData={serviceData} form={form} />
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={() =>
            onChange({ ...form, currentStep: REPORT_STEPS.GENERAL_IMPRESSIONS })
          }
        >
          ПРОДОЛЖИТЬ
        </Button>
      </ButtonContainer>
    ),
  };
};
