import { Container, Index, IndexContainer, Title } from "./MenuElement.styled";

interface IMenuElement {
  title: string;
  index: number;
  isActive: boolean;
}

export const MenuElement = ({ title, index, isActive }: IMenuElement) => {
  return (
    <Container>
      <IndexContainer isActive={isActive}>
        <Index>{`(${index})`}</Index>
      </IndexContainer>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
};
