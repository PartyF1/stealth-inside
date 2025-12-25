import { memo, useEffect, useState } from "react";
import { useChat, type Message } from "../../../components/Chat/Chat";
import { useParams } from "react-router-dom";
import { getMessages, newMessage } from "../service/ChatService";
import api from "../../../shared/lib/axios";

const CurrentChat = memo(() => {
  const { chatId } = useParams();
  const [chatData, setChatData] = useState({});
  const handleSendMessage = async (msg: string) => {
    const response = await newMessage(
      {
        text: msg,
        time: new Date().toLocaleDateString(),
        userId: "0",
      },
      chatId ?? ""
    );

    refreshChat();
  };

  const refreshChat = async () => {
    if (chatId) {
      try {
        const response = await getMessages(chatId);
        setChatData(response?.data);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const chat = useChat({
    ...chatData,
    onSend: handleSendMessage,
  });

  useEffect(() => {
    if (chatId) {
      try {
        refreshChat();
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <>
      {chat?.header}
      {chat?.content}
      {chat?.footer}
    </>
  );
});

export default CurrentChat;
