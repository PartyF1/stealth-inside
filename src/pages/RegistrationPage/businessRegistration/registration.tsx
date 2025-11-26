import { useMemo, useState } from "react";
import type { IRegistrationData } from "../../../shared/types/registration";
import { SideMenu } from "../ui/Menu";
import { Button } from "../../../shared/ui/Button";

enum STEPS {
  CREATE_ACCOUNT = "createAccount",
  CREDIT_COMPANY = "creditCompany",
  FIRST_ORDER = "firstOrder",
}

export const useBusinessRegistrationAggregator = () => {
  const [form, setForm] = useState<IRegistrationData>();
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.CREATE_ACCOUNT);
  const sideContent = useMemo(() => {
    return (
      <SideMenu
        activeElement={currentStep}
        elements={[
          { id: STEPS.CREATE_ACCOUNT, title: "СОЗДАЙТЕ АККАУНТ" },
          { id: STEPS.CREDIT_COMPANY, title: "АККРЕДИТУЙТЕ КОМПАНИЮ" },
          { id: STEPS.FIRST_ORDER, title: "СОЗДАЙТЕ СВОЙ ПЕРВЫЙ ЗАКАЗ" },
        ]}
      />
    );
  }, [currentStep]);

  return {
    mainContent: {},
    sideContent: {
      content: sideContent,
    },
  };
};
