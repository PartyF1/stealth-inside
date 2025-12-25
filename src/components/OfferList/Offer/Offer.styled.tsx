import styled from "styled-components";

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.input.hover};
  }
`;

export const DetailsContainer = styled.div`
  padding-right: 34px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

export const Detail = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #5e5e5e;
`;
