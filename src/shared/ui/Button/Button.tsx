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
  switch (type) {
    case ButtonType.PRIMARY: {
      return css`
        ${({ theme }) => theme.colors.accent}
      `;
    }
    case ButtonType.GHOST: {
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

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`;

const Action = styled.div<IButton>`
  height: 60px;
  cursor: pointer;
  width: ${({ dimension }) =>
    dimension === ButtonDimension.WIDE ? "100%" : "auto"};
  background-color: ${calcBackgroundColor};
`;

export const Button = ({
  dimension,
  children,
  type,
  onClick,
  disabled,
}: IButton) => {
  return (
    <ButtonWrapper>
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
