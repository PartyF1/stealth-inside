import { memo, useMemo } from "react";
import TemplatePage from "../TemplatePage";
import { OfferList } from "../../components/OfferList";
import { OpenButton } from "../../components/MainMenu";

const MainPage = memo(() => {
  const offers = [
    {
      id: "1",
      name: "АРСЕНИЙ ХОЛМОГОРОВ",
      details: {
        Категория: 7000,
        negr: "YES",
      },
    },
    {
      id: "1",
      name: "АРСЕНИЙ ХОЛМОГОРОВ",
      details: {
        cost: 7000,
        negr: "YES",
      },
    },
    {
      id: "1",
      name: "АРСЕНИЙ ХОЛМОГОРОВ",
      details: {
        cost: 7000,
        negr: "YES",
      },
    },
    {
      id: "1",
      name: "АРСЕНИЙ ХОЛМОГОРОВ",
      details: {
        cost: 7000,
        negr: "YES",
      },
    },
    {
      id: "1",
      name: "АРСЕНИЙ ХОЛМОГОРОВ",
      details: {
        cost: 7000,
        negr: "YES",
      },
    },
  ];

  return (
    <>
      <TemplatePage
        mainContent={{
          content: <OfferList offers={offers} />,
        }}
      ></TemplatePage>
    </>
  );
});

export default MainPage;
