import React, { useState } from "react";
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
} from "./Chat.styled";

interface UserInfo {
  name: string;
  status: string; // Например: "Онлайн", "Оффлайн", "В сети 20 минут назад"
}

export interface Message {
  id: string;
  text: string;
  time: string; // Формат: "12:16"
  fromMe: boolean; // true — если сообщение наше
  color?: string; // Для кастомного цвета фона (опционально)
}

interface ChatProps {
  user?: UserInfo;
  messages?: Message[];
  onSend: (msg: string) => void;
}

export const useChat = ({ user, messages, onSend }: ChatProps) => {
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return {
    header: (
      <HeaderContainer>
        <UserName>{user?.name}</UserName>
        <UserStatus>{user?.status}</UserStatus>
      </HeaderContainer>
    ),
    content: (
      <MessagesContainer>
        {messages?.map((msg) => (
          <MessageBubble
            key={msg.id}
            fromMe={msg.fromMe}
            style={msg.color ? { background: msg.color } : {}}
          >
            <MessageText>{msg.text}</MessageText>
            <MessageMeta fromMe={msg.fromMe}>
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
