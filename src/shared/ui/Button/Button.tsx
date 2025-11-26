import type { ReactNode, MouseEvent } from "react";
import styled, { css } from "styled-components";
import { ButtonDimension, ButtonType } from ".";

export interface IButton {
  dimension: ButtonDimension;
  children?: ReactNode;
  type: ButtonType;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

const calcBackgroundColor = ({ type, disabled }: IButton) => {
  if (disabled) {
    return css`
      ${({ theme }) => theme.colors.accentDisabled}
    `;
  }

  switch (type) {
    case ButtonType.PRIMARY: {
      return css`
        ${({ theme }) =>
          disabled ? theme.colors.accentDisabled : theme.colors.accent}
      `;
    }
    case ButtonType.TEXT: {
      return css`
        ${({ theme }) => theme.colors.accent}
      `;
    }
    case ButtonType.SECONDARY: {
      return css`
        ${({ theme }) => theme.colors.accent}
      `;
    }
    case ButtonType.TAG: {
      return css`
        ${({ theme }) => theme.colors.accent}
      `;
    }
    default:
      return css``;
  }
};

const calcTextColor = ({ type }: IButton) => {
  switch (type) {
    case ButtonType.PRIMARY: {
      return css`
        ${({ theme }) => theme.colors.text.onLight.primary}
      `;
    }
    default:
      return css``;
  }
};
const ButtonWrapper = styled.div<IButton>`
  display: flex;
  align-items: center;

  width: ${({ dimension }: IButton) =>
    dimension === ButtonDimension.WIDE ? "100%" : "auto"};
`;

const Action = styled.div<IButton>`
  width: ${({ dimension }: IButton) =>
    dimension === ButtonDimension.WIDE ? "100%" : "auto"};
  font-size: 36px;
  display: flex;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${calcBackgroundColor};
  color: ${calcTextColor};
`;

export const Button = ({
  dimension,
  children,
  type,
  onClick,
  disabled,
}: IButton) => {
  return (
    <ButtonWrapper dimension={dimension} type={type} onClick={onClick}>
      <Action
        dimension={dimension}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </Action>
    </ButtonWrapper>
  );
};
