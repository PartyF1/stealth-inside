import { DefaultForm } from "../../../../components/Form";
import { Dimension, ButtonType } from "../../../../shared/types/enums";
import type { IReport } from "../../../../shared/types/report";
import { Button } from "../../../../shared/ui/Button";
import type { IStepData } from "../../../RegistrationPage/businessRegistration/steps/types";
import { ButtonContainer } from "../../../RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { impressionsData } from "./dataField";

export const useGeneralImpressions = ({
  form,
  onChange,
  createReport,
}: IStepData<IReport> & { createReport: () => void }) => {
  return {
    header: <></>,
    content: (
      <DefaultForm onChange={onChange} formData={impressionsData} form={form} />
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={createReport}
        >
          ОТПРАВИТЬ
        </Button>
      </ButtonContainer>
    ),
  };
};
