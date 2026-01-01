import api from "../../../shared/lib/axios";
import { UserType, type User } from "../../../shared/types/user";

interface IMessage {
  text: string;
  time: string;
  userId: string;
}

export const getOrders = async (user: User) => {
  const response = await api.get(`/chats?${user.type}=${user.id}`);
  const result = response.data?.map(async (element) => {
    const chatUser = (
      await api.get(
        `/users/${
          element[
            user.type === UserType.BUSINESS
              ? UserType.MYSTERY_SHOPPER
              : UserType.BUSINESS
          ]
        }`
      )
    ).data;
    return {
      ...element,
      user: chatUser,
    };
  }, []);

  return Promise.all(result);
};

export const getMessages = async (chatId: string) => {
  return await api.get(`/chats/${chatId}/?_embed=messages`);
};

export const newMessage = async (message: IMessage, chatId: string) => {
  return await api.post(`/messages`, {
    ...message,
    chatId,
  });
};
