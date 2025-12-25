import { Offer } from "./Offer/Offer";
import { ListContainer } from "./OfferList.styled";

interface IOfferElement {
  id: string;
  name: string;
  details: Record<string, string | number | undefined>;
}

interface IOfferListProps {
  offers: IOfferElement[];
  onSelect?: (value: string) => {};
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
