import { memo } from "react";
import TemplatePage from "../TemplatePage";
import { DefaultContent } from "../../components/DefaultContent";
import { Button, ButtonDimension, ButtonType } from "../../shared/ui/Button";
import { Actions } from "./WelcomePage.styled";

const WelcomePage = memo(() => {
  const mainContent = {
    content: (
      <DefaultContent title="ДОБРО ПОЖАЛОВАТЬ В CHECKMATE">
        <Actions>
          <Button
            dimension={ButtonDimension.WIDE}
            type={ButtonType.PRIMARY}
            onClick={() => {}}
          >
            Войти
          </Button>
          <Button
            dimension={ButtonDimension.WIDE}
            type={ButtonType.SECONDARY}
            onClick={() => {}}
          >
            Зарегистрироваться
          </Button>
        </Actions>
      </DefaultContent>
    ),
  };
  return <TemplatePage mainContent={mainContent} />;
});

export default WelcomePage;
