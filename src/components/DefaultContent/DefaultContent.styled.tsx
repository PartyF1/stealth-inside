import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max-content;
`;

export const Title = styled.span`
  font-size: 112px;
  line-height: 82%;
  letter-spacing: -5%;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;
