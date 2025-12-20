import { ChildrenContainer, Container, Title } from "./DefaultContent.styled";
import type { IDefaultContentProps } from "./types";

export const DefaultContent = ({ title, children }: IDefaultContentProps) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
