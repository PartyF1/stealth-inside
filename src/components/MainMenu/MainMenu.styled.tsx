import styled from "styled-components";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 100;
`;

export const Drawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;

  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.onLight.primary};

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;

  z-index: 101;
`;

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  max-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const MenuTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 16px 0;
  margin: 0;
  flex: 1;
`;

export const MenuItem = styled.li`
  padding: 14px 20px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.input.hover};
  }
`;

export const Footer = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const CreateOrder = styled.button`
  width: 100%;
  padding: 12px 0;
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.text.onDark.primary};
  border: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  transform: rotate(90deg);
  transform-origin: bottom left;
  top: 0;
  left: 0;
  width: 200px;
`;
