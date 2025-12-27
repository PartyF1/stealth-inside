import { memo, useEffect, useState } from "react";
import TemplatePage from "../TemplatePage";
import { Outlet } from "react-router-dom";
import { useChatsList } from "../../components/ChatsList/ChatsList";
import { getOrders } from "./service/ChatService";
import { useUser } from "../../app/providers/UserProvider/context";
import type { User } from "../../shared/types/user";

const ChatPage = memo(() => {
  const { user } = useUser();
  const [chats, setChats] = useState([]);
  const chatsList = useChatsList({
    chats,
    searchChat: () => {},
    currentSearch: "",
  });

  useEffect(() => {
    getOrders(user as User)
      .then((response) => {
        setChats(response as any);
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
