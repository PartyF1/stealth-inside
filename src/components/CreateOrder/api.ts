import api from "../../shared/lib/axios";
import type { IOfferData } from "./CreateOrder";

export const createOffer = async (offerData: IOfferData, userId: string) => {
  const { name, ...details } = offerData;
  const response = await api.post("/offers", {
    name,
    userId,
    details: {
      description: {
        title: "Описание",
        value: details.description,
      },
      conditions: {
        title: "Условия",
        value: details.conditions,
      },
      location: {
        title: "Расположение",
        value: details.location,
      },
      cost: {
        title: "Оплата",
        value: details.cost,
      },
    },
  });

  return response.data;
};
