import api from "../../../shared/lib/axios";

interface IMessage {
  text: string;
  time: string;
  userId: string;
}

export const getOrders = async () => {
  const response = await api.get("/chats");
  return response;
};

export const getMessages = async (chatId: string) => {
  return await api.get(`/chats/${chatId}`);
};

export const newMessage = async (message: IMessage, chatId: string) => {
  // 1. Получаем чат
  const { data: chat } = await api.get(`/chats/${chatId}`);

  // 2. Добавляем сообщение
  const updatedMessages = [...chat.messages, message];

  // 3. Обновляем чат
  await api.patch(`/chats/${chatId}`, {
    messages: updatedMessages,
  });
};
