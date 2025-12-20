import type { ChangeEvent, InputHTMLAttributes } from "react";
import { InputContainer, StyledInput } from "./Input.styled";
import { Dimension, Type } from "../../types/enums";
import { SelectContainer, SelectTitle } from "../Select/Select.styled";

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;

export interface IInputProps extends NativeInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  dimension?: Dimension;
  viewType?: Type;
  title?: string;
}

export const Input = ({
  onChange,
  dimension = Dimension.WIDE,
  viewType = Type.GHOST,
  placeholder = "",
  value = "",
  title,
  ...props
}: IInputProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectContainer>
      {title && <SelectTitle>{title}</SelectTitle>}
      <InputContainer>
        <StyledInput
          id="input"
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          viewType={viewType}
          dimension={dimension}
          {...props}
        />
      </InputContainer>
    </SelectContainer>
  );
};
