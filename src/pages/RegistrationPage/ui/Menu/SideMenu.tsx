import { MenuElement } from "./MenuElement/MenuElement";
import { StyledSideMenu } from "./SideMenu.styled";

interface SideMenuElement {
  id: string;
  title: string;
}

interface SideMenuProps {
  elements?: SideMenuElement[];
  activeElement?: string;
}

export const SideMenu = ({ elements, activeElement }: SideMenuProps) => {
  return (
    <StyledSideMenu>
      {elements?.map(
        (element, index) => (
          <MenuElement
            key={element.id}
            title={element.title}
            index={index + 1}
            isActive={activeElement === element.id}
          />
        ),
        []
      )}
    </StyledSideMenu>
  );
};
