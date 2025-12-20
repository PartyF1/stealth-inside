import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-left: 94px;
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const SideContent = styled.aside`
  width: 40%;
`;

export const MainContent = styled.main`
  width: 60%;
  height: 100%;
  padding: 0px 94px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-direction: column;
`;

export const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: stretch;
`;

export const SplitterLine = styled.div`
  height: 100%;
  border-style: dashed;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const Header = styled.div`
  height: 135px;
`;

export const Footer = styled.div`
  height: 135px;
`;
