import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-top: 34px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.div`
  font-size: 27px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text.onLight.primary};
`;

export const UserStatus = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.onLight.secondary};
  margin-top: 3px;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: stretch;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 8px;
`;

export const MessageBubble = styled.div<{ fromMe: boolean }>`
  align-self: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
  background: ${({ theme, fromMe }) =>
    fromMe ? theme.colors.input.default : theme.colors.white};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  border-radius: 10px;
  padding: 12px 16px 8px 16px;
  max-width: 340px;
  min-width: 60px;
  white-space: pre-line;
  font-size: 15px;
  position: relative;
`;

export const MessageText = styled.div`
  word-break: break-word;
`;

export const MessageMeta = styled.div<{ fromMe: boolean }>`
  display: flex;
  justify-content: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.onLight.secondary};
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 34px 0px;
`;
export const InputField = styled.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.input.default};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  outline: none;
  margin-right: 2px;
`;
export const SendButton = styled.button`
  padding: 7px 17px;
  border-radius: 7px;
  border: none;
  background: ${({ theme }) => theme.colors.input.default};
  color: ${({ theme }) => theme.colors.text.onLight.primary};
  font-size: 15px;
  opacity: ${({ disabled }) => (disabled ? 0.55 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: opacity 0.14s;
`;
