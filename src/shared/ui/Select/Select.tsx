import type { ReactNode } from "react";
import {
  Bullet,
  OptionItem,
  OptionsList,
  SelectContainer,
  SelectTitle,
} from "./Select.styled";

export interface ISelectOption {
  id: string;
  value: string;
}

export interface ISelectProps {
  title?: ReactNode;
  options: ISelectOption[];
  value?: string; // выбранный id
  onChange: (option: ISelectOption) => void;
}

export const Select = ({ title, options, value, onChange }: ISelectProps) => {
  const handleClick = (option: ISelectOption) => {
    if (option.id !== value) {
      onChange(option);
    }
  };

  return (
    <SelectContainer>
      {title && <SelectTitle>{title}</SelectTitle>}
      <OptionsList>
        {options.map((option) => {
          const isActive = option.id === value;

          return (
            <OptionItem
              key={option.id}
              $isActive={isActive}
              onClick={() => handleClick(option)}
            >
              <Bullet $isActive={isActive} />
              {option.value}
            </OptionItem>
          );
        })}
      </OptionsList>
    </SelectContainer>
  );
};
