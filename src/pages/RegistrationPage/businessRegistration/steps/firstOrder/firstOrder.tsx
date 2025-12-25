import { Dimension } from "../../../../../shared/types/enums";
import { Button, ButtonType } from "../../../../../shared/ui/Button";
import type { IStepData } from "../types";
import { DefaultContent } from "../../../../../components/DefaultContent";
import { Select } from "../../../../../shared/ui/Select";
import type { ISelectOption } from "../../../../../shared/ui/Select";
import {
  checkTarget,
  visitFormat,
} from "../../../../../shared/constants.ts/business";
import { useState } from "react";
import { Input } from "../../../../../shared/ui/Input";
import { ButtonContainer } from "../../../ui/ButtonContainer/ButtonContainer.styled";

interface IFirstOrderForm {
  checkTarget?: ISelectOption;
  visitFormat?: ISelectOption;
  location?: string;
  details?: string;
}

export const useFirstOrder = ({ form }: Partial<IStepData>) => {
  const [orderForm, setOrderForm] = useState<IFirstOrderForm>({});
  const handleOnClick = () => {};

  const handleOnChange = (value: unknown, key: string) => {
    setOrderForm({
      ...orderForm,
      [key]: value,
    });
  };

  return {
    header: <></>,
    content: (
      <DefaultContent>
        <Select
          title={"ЦЕЛЬ ПРОВЕРКИ"}
          options={checkTarget}
          onChange={(option) => handleOnChange(option, "checkTarget")}
          value={orderForm?.checkTarget?.id}
        />
        <Select
          title={"ФОРМАТ ВИЗИТА"}
          options={visitFormat}
          onChange={(option) => handleOnChange(option, "visitFormat")}
          value={orderForm?.visitFormat?.id}
        />
        <Input
          title={"ЛОКАЦИЯ"}
          onChange={(value) => handleOnChange(value, "location")}
          value={orderForm?.location ?? ""}
          placeholder="Ваш адрес"
        />
        <Input
          title={"ДОБАВЬТЕ СВОИ ПОЖЕЛАНИЯ"}
          onChange={(value) => handleOnChange(value, "details")}
          value={orderForm?.details ?? ""}
          placeholder="Укажите детали заказа"
        />
      </DefaultContent>
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={handleOnClick}
        >
          ОТПРАВИТЬ
        </Button>
      </ButtonContainer>
    ),
  };
};
