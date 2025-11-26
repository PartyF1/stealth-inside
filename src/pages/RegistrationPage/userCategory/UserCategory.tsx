import { DefaultContent } from "../../../components/DefaultContent";
import { Button, ButtonDimension, ButtonType } from "../../../shared/ui/Button";
import { Actions } from "../../WelcomePage/WelcomePage.styled";
import type { userCategory } from "../RegistrationPage";

export const UserCategory = (setUserCategory: CallableFunction) => {
  const handleOnClick = (userCategory: userCategory) => {
    setUserCategory(userCategory);
  };

  return {
    content: (
      <DefaultContent title="ДОБРО ПОЖАЛОВАТЬ В CHECKMATE">
        <Actions>
          <Button
            dimension={ButtonDimension.WIDE}
            type={ButtonType.PRIMARY}
            onClick={() => handleOnClick("business")}
          >
            Для бизнеса
          </Button>
          <Button
            dimension={ButtonDimension.WIDE}
            type={ButtonType.SECONDARY}
            onClick={() => handleOnClick("executor")}
          >
            Для исполнителя
          </Button>
        </Actions>
      </DefaultContent>
    ),
  };
};
