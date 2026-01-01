import { Offer } from "./Offer/Offer";
import { ListContainer } from "./OfferList.styled";

export interface IOfferElement {
  id: string;
  name: string;
  user: Record<string, any>;
  details: Record<string, { title: string; value: string }>;
}

interface IOfferListProps {
  offers: IOfferElement[];
  onSelect?: (value: string) => void;
}

export const OfferList = ({ offers, onSelect }: IOfferListProps) => {
  return (
    <ListContainer>
      {offers.map((offer) => (
        <Offer
          key={offer.id}
          title={offer.name}
          details={offer.details}
          onSelect={() => onSelect?.(offer.id)}
        />
      ))}
    </ListContainer>
  );
};
