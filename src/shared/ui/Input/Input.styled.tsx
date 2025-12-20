import styled from "styled-components";
import type { Dimension, Type } from "../../types/enums";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input.default};
  width: 100%;
  height: 53px;
  padding: 14px 0px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.input.hover};
  }
  &:focus-within {
    border: 4px solid ${({ theme }) => theme.colors.white};
  }
`;

export const StyledInput = styled.input<{
  dimension: Dimension;
  viewType: Type;
}>`
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  background-color: ${({ theme }) => theme.colors.input.fullOpacity};
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: none;
  }
  & > placeholder {
    color: ${({ theme }) => theme.colors.text.onLight.secondary};
  }
`;
