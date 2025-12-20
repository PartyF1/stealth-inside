import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 219px;
  flex-direction: row;
  border-top: 1px solid ${({ theme }) => theme.colors.text.onLight.secondary};
  align-items: center;
`;

export const IndexContainer = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? ({ theme }) => theme.colors.accent : ""};
  width: 36px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.text.onLight.primary
      : theme.colors.text.onLight.secondary};
`;

export const Index = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  transform: rotate(-90deg);
`;

export const Title = styled.div<{ isActive: boolean }>`
  padding-left: 30px;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.text.onLight.primary
      : theme.colors.text.onLight.secondary};
`;
