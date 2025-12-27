import { memo, useEffect, useState } from "react";
import { useChat } from "../../../components/Chat/Chat";
import { useParams } from "react-router-dom";
import { getMessages, newMessage } from "../service/ChatService";
import { useUser } from "../../../app/providers/UserProvider/context";

const CurrentChat = memo(() => {
  const { chatId } = useParams();
  const [chatData, setChatData] = useState({});
  const { user } = useUser();
  const handleSendMessage = async (msg: string) => {
    if (user && chatId)
      try {
        await newMessage(
          {
            text: msg,
            time: new Date().toLocaleDateString(),
            userId: user?.id,
          },
          chatId
        );

        refreshChat();
      } catch (e) {
        console.error(e);
      }
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
