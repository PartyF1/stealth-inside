import styled from "styled-components";

export const Container = styled.div`
  gap: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Title = styled.span`
  font-size: 112px;
  line-height: 82%;
  letter-spacing: -5%;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 34px;
`;
