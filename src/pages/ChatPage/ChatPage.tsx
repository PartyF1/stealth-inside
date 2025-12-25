import { memo, useEffect, useState } from "react";
import TemplatePage from "../TemplatePage";
import { Outlet } from "react-router-dom";
import { useChatsList } from "../../components/ChatsList/ChatsList";
import { getOrders } from "./service/ChatService";

const ChatPage = memo(() => {
  const [chats, setChats] = useState([]);
  const chatsList = useChatsList({
    chats,
    searchChat: () => {},
    currentSearch: "",
  });

  useEffect(() => {
    getOrders()
      .then((response) => {
        setChats(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch chats:", error);
      });
  }, []);

  return (
    <TemplatePage
      sideContent={chatsList}
      mainContent={{
        content: <Outlet />,
      }}
    />
  );
});

export default ChatPage;
