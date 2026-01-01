import { memo, useEffect, useState } from "react";
import TemplatePage from "../TemplatePage";
import { OfferList } from "../../components/OfferList";
import type { IOfferElement } from "../../components/OfferList/OfferList";
import { getOffers } from "./service/OfferService";
import { useUser } from "../../app/providers/UserProvider/context";
import { useNavigate } from "react-router-dom";

const MainPage = memo(() => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [offers, setOffers] = useState<IOfferElement[]>([]);

  const refreshOffers = async () => {
    if (user?.type) setOffers(await getOffers(user?.type));
  };

  useEffect(() => {
    refreshOffers();
  }, []);

  const handleSelect = (id: string) => {
    navigate(`./${id}`);
  };

  return (
    <>
      <TemplatePage
        mainContent={{
          content: <OfferList offers={offers} onSelect={handleSelect} />,
        }}
      ></TemplatePage>
    </>
  );
});

export default MainPage;
