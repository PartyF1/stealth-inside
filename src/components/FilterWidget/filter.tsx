import { Dimension, Type } from "../../shared/types/enums";
import { Input } from "../../shared/ui/Input";
import { Container } from "./filter.styled";

export const FilterWidget = () => {
  return (
    <Container>
      <Input dimension={Dimension.NARROW} onChange={() => {}} value="" />
    </Container>
  );
};
