import {
  Detail,
  DetailsContainer,
  InformationContainer,
  OfferContainer,
} from "./Offer.styled";
import { Title } from "../../DefaultContent/DefaultContent.styled";

interface IOfferProps {
  title: string;
  details: Record<string, { title: string; value: string }>;
  onSelect: () => void;
}

export const Offer = ({ title, details, onSelect }: IOfferProps) => {
  return (
    <OfferContainer onClick={onSelect}>
      <Title>{title}</Title>
      <InformationContainer>
        <DetailsContainer>
          {Object.values(details).map((detail) => (
            <Detail>{`${detail?.title}: ${detail.value}`}</Detail>
          ))}
        </DetailsContainer>
      </InformationContainer>
    </OfferContainer>
  );
};
