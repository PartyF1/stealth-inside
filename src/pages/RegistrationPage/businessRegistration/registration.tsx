import { useMemo, useState } from "react";
import type { IRegistrationData } from "../../../shared/types/registration";
import { SideMenu } from "../ui/Menu";
import { usePersonalData } from "./steps/personalData/personalData";
import { BUSINESS_STEPS } from "../../../shared/types/enums";
import { useCreditCompany } from "./steps/creditCompany/creditCompany";
import { useFirstOrder } from "./steps/firstOrder/firstOrder";

export const useBusinessRegistrationAggregator = () => {
  const [form, setForm] = useState<IRegistrationData>({
    email: "",
    password: "",
    approvePassword: "",
    companyName: "",
    scopeOfActivity: "",
    region: "",
    contacts: "",
    egrulExtractNumber: "",
    registrationCertificateNumber: "",
    inn: "",
    powerOfAttorney: "",
    currentStep: BUSINESS_STEPS.CREATE_ACCOUNT,
  });

  const personalDataStep = usePersonalData({ form, onChange: setForm });
  const creditCompanyDataStep = useCreditCompany({ form, onChange: setForm });
  const firstOrderStep = useFirstOrder({ form });

  const mainContent = useMemo(() => {
    switch (form.currentStep) {
      case BUSINESS_STEPS.CREATE_ACCOUNT:
        return personalDataStep;
      case BUSINESS_STEPS.CREDIT_COMPANY:
        return creditCompanyDataStep;
      case BUSINESS_STEPS.FIRST_ORDER:
        return firstOrderStep;
    }
  }, [form, personalDataStep, setForm]);

  const sideContent = useMemo(() => {
    return (
      <SideMenu
        activeElement={form.currentStep}
        elements={[
          { id: BUSINESS_STEPS.CREATE_ACCOUNT, title: "СОЗДАЙТЕ АККАУНТ" },
          { id: BUSINESS_STEPS.CREDIT_COMPANY, title: "АККРЕДИТУЙТЕ КОМПАНИЮ" },
          {
            id: BUSINESS_STEPS.FIRST_ORDER,
            title: "СОЗДАЙТЕ СВОЙ ПЕРВЫЙ ЗАКАЗ",
          },
        ]}
      />
    );
  }, [form.currentStep]);

  return {
    ...(mainContent && { mainContent }),
    sideContent: {
      content: sideContent,
    },
  };
};
