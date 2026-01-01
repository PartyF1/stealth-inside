import type { ReactNode } from "react";
import { MenuElement } from "./MenuElement/MenuElement";
import { StyledSideMenu } from "./SideMenu.styled";

interface SideMenuElement {
  id: string;
  title: string;
}

interface SideMenuProps {
  elements?: SideMenuElement[];
  activeElement?: string;
  indexed?: boolean;
  clickable?: boolean;
  onClick?: (id: string) => void;
  size?: string;
  renderContent?: (elementProps: unknown) => ReactNode;
}

export const SideMenu = ({
  elements,
  activeElement,
  indexed,
  clickable,
  onClick,
  size,
  renderContent,
}: SideMenuProps) => {
  return (
    <StyledSideMenu>
      {elements?.map(
        (element, index) => (
          <MenuElement
            key={element.id}
            title={element.title}
            number={index + 1}
            id={element.id}
            isActive={activeElement === element.id}
            indexed={indexed}
            clickable={clickable}
            onClick={onClick}
            size={size}
            renderContent={renderContent?.(element)}
          />
        ),
        []
      )}
    </StyledSideMenu>
  );
};
