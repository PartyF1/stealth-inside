import { memo, useMemo, useState } from "react";
import TemplatePage from "../TemplatePage";
import { UserCategory } from "./userCategory/UserCategory";
import { useBusinessRegistrationAggregator } from "./businessRegistration/registration";

export type userCategory = "business" | "executor" | null;

const RegistrationPage = memo(() => {
  const [userCategory, setUserCategory] = useState<userCategory>(null);
  const businessRegistration = useBusinessRegistrationAggregator();

  const currentView = useMemo(() => {
    switch (userCategory) {
      case "business":
        return businessRegistration;
      case "executor":
        return {};
      default:
        return UserCategory(setUserCategory);
    }
  }, [userCategory, setUserCategory, businessRegistration]);

  return (
    <>
      <TemplatePage {...currentView}></TemplatePage>
    </>
  );
});

export default RegistrationPage;
