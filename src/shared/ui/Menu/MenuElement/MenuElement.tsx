import { Container, Index, IndexContainer, Title } from "./MenuElement.styled";

export interface IMenuElement {
  title: string;
  number?: number;
  id: string;
  isActive: boolean;
  indexed?: boolean;
  clickable?: boolean;
  size?: string;
  onClick?: (id: string) => void;
}

export const MenuElement = ({
  title,
  id,
  number,
  isActive,
  indexed = true,
  clickable = false,
  size,
  onClick,
}: IMenuElement) => {
  return (
    <Container clickable={clickable} size={size} onClick={() => onClick?.(id)}>
      <IndexContainer isActive={isActive}>
        {indexed && <Index>{`(${number})`}</Index>}
      </IndexContainer>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};
