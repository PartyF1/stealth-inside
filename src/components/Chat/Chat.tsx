import { useState } from "react";
import {
  HeaderContainer,
  UserName,
  UserStatus,
  MessagesContainer,
  MessageBubble,
  MessageText,
  MessageMeta,
  FooterContainer,
  InputField,
  SendButton,
  UserContainer,
} from "./Chat.styled";
import { useUser } from "../../app/providers/UserProvider/context";
import { Button } from "../../shared/ui/Button";
import { UserType } from "../../shared/types/user";
import { useNavigate, useParams } from "react-router-dom";
import type { IReport } from "../../shared/types/report";

interface UserInfo {
  name: string;
  status: string; // Например: "Онлайн", "Оффлайн", "В сети 20 минут назад"
}

export interface Message {
  id: string;
  text: string;
  time: string; // Формат: "12:16"
  userId: string;
  color?: string; // Для кастомного цвета фона (опционально)
}

interface ChatProps {
  user?: UserInfo;
  messages?: Message[];
  report?: IReport;
  onSend: (msg: string) => void;
}

export const useChat = ({ user, messages, report, onSend }: ChatProps) => {
  const [input, setInput] = useState("");
  const { user: currentUser } = useUser();
  const { chatId } = useParams();
  const navigate = useNavigate();
  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return {
    header: (
      <HeaderContainer>
        <UserContainer>
          <UserName>{user?.name}</UserName>
          <UserStatus>{user?.status}</UserStatus>
        </UserContainer>
        {report?.id && currentUser?.type === UserType.BUSINESS && (
          <Button onClick={() => navigate(`/reports/${report.id}`)}>
            ПОСМОТРЕТЬ ОТЧЁТ
          </Button>
        )}
        {!report?.id && currentUser?.type === UserType.MYSTERY_SHOPPER && (
          <Button onClick={() => navigate(`/orders/${chatId}/report`)}>
            СОСТАВИТЬ ОТЧЁТ
          </Button>
        )}
      </HeaderContainer>
    ),
    content: (
      <MessagesContainer>
        {messages?.map((msg) => (
          <MessageBubble
            key={msg.id}
            fromMe={msg.userId === currentUser?.id}
            style={msg.color ? { background: msg.color } : {}}
          >
            <MessageText>{msg.text}</MessageText>
            <MessageMeta fromMe={msg.userId === currentUser?.id}>
              <span>{msg.time}</span>
            </MessageMeta>
          </MessageBubble>
        ))}
      </MessagesContainer>
    ),
    footer: (
      <FooterContainer>
        <InputField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Сообщение"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <SendButton onClick={handleSend} disabled={!input.trim()}>
          Отправить
        </SendButton>
      </FooterContainer>
    ),
  };
};
