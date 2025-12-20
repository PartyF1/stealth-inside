import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectTitle = styled.span`
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OptionItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const Bullet = styled.span<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.accent : theme.colors.text.onLight.primary};
`;
