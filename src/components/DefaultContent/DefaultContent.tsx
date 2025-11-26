import { Container, Title } from "./DefaultContent.styled";
import type { IDefaultContentProps } from "./types";

export const DefaultContent = ({ title, children }: IDefaultContentProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
