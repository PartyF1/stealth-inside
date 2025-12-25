import { useMemo } from "react";
import { Detail, DetailsContainer, OfferContainer } from "./Offer.styled";
import { Title } from "../../DefaultContent/DefaultContent.styled";

interface IOfferProps {
  title: string;
  details: Record<string, string | number | undefined>;
  onSelect: () => void;
}

export const Offer = ({ title, details, onSelect }: IOfferProps) => {
  const mapDetails = useMemo(() => {
    const mapped = [];
    for (const field in details) {
      mapped.push(<Detail>{details[field]}</Detail>);
    }
    return mapped;
  }, [details]);

  return (
    <OfferContainer onClick={onSelect}>
      <Title>{title}</Title>
      <DetailsContainer>{mapDetails}</DetailsContainer>
    </OfferContainer>
  );
};
