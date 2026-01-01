import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../shared/ui/Input";
import { SideMenu } from "../../shared/ui/Menu";
import { ChatPreview } from "./ChatsList.styled";
import { UserName, UserStatus } from "../Chat/Chat.styled";

export interface IChatsListProps {
  chats: any[];
  currentSearch: string;
  searchChat: (value: string) => void;
}

export const useChatsList = ({
  chats,
  currentSearch,
  searchChat,
}: IChatsListProps) => {
  const navigate = useNavigate();
  const { chatId } = useParams();

  const renderChatInfo = (chat: any) => (
    <ChatPreview>
      <UserName>{chat?.user?.name ?? ""}</UserName>
      <UserStatus>{chat?.user?.status ?? ""}</UserStatus>
    </ChatPreview>
  );

  return {
    header: (
      <Input onChange={searchChat} value={currentSearch} placeholder="Поиск" />
    ),
    content: (
      <SideMenu
        indexed={false}
        clickable
        elements={chats}
        activeElement={chatId}
        onClick={(id) => navigate(`/orders/${id}`)}
        size={"m"}
        renderContent={renderChatInfo}
      />
    ),
  };
};
