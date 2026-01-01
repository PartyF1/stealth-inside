import api from "../../../shared/lib/axios";

export const getOffers = async (type: string) => {
  const response = await api.get("/offers", {
    params: {
      _embed: "user",
      "user.type_ne": type,
    },
  });

  return response.data;
};

export const getOfferData = async (offerId: string) => {
  const response = await api.get(`/offers/${offerId}`, {
    params: {
      _embed: "user",
    },
  });

  return response.data;
};

export const createOrder = async (
  offerId: string,
  executorId: string,
  businessId: string
) => {
  return await api.post(`/chats`, {
    offerId,
    mystery_shopper: executorId,
    business: businessId,
  });
};
