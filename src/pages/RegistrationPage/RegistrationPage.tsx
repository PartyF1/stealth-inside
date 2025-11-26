import { memo, useState } from "react";
import TemplatePage from "../TemplatePage";
import { UserCategory } from "./userCategory/UserCategory";
import { useBusinessRegistrationAggregator } from "./businessRegistration/registration";

export type userCategory = "business" | "executor" | null;

const RegistrationPage = memo(() => {
  const [userCategory, setUserCategory] = useState<userCategory>(null);

  const businessRegistration = useBusinessRegistrationAggregator();

  return (
    <>
      <TemplatePage {...businessRegistration}></TemplatePage>
    </>
  );
});

export default RegistrationPage;
