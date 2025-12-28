import { DefaultContent } from "../../../../components/DefaultContent";
import { DefaultForm } from "../../../../components/Form";
import { Dimension, REPORT_STEPS } from "../../../../shared/types/enums";
import type { IReport } from "../../../../shared/types/report";
import { Button, ButtonType } from "../../../../shared/ui/Button";
import type { IStepData } from "../../../RegistrationPage/businessRegistration/steps/types";
import { ButtonContainer } from "../../../RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { mainData } from "./dataField";

export const useMainInfo = ({ form, onChange }: IStepData<IReport>) => {
  return {
    header: <></>,
    content: (
      <DefaultForm onChange={onChange} formData={mainData} form={form} />
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={() =>
            onChange({ ...form, currentStep: REPORT_STEPS.SERVICE_QUALITY })
          }
        >
          ПРОДОЛЖИТЬ
        </Button>
      </ButtonContainer>
    ),
  };
};
