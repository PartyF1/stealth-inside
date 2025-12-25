import styled from "styled-components";
import {
  CreateOrder,
  Footer,
  MenuItem,
  MenuList,
  MenuTitle,
  Drawer,
  MenuHeader,
  Overlay,
} from "./MainMenu.styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { useAuth } from "../../app/providers/AuthProvider/context";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Drawer $isOpen={isOpen}>
        <MenuHeader>
          <MenuTitle>МЕНЮ</MenuTitle>
          <Button onClick={logout}>ВЫЙТИ</Button>
        </MenuHeader>

        <MenuList>
          <MenuItem onClick={() => navigate("/orders")}>Мой профиль</MenuItem>
          <MenuItem onClick={() => navigate("/offers")}>
            Мои предложения
          </MenuItem>
          <MenuItem onClick={() => navigate("/orders")}>Мои заказы</MenuItem>
        </MenuList>

        <Footer>
          <CreateOrder>+ Создать заказ</CreateOrder>
        </Footer>
      </Drawer>
    </>
  );
};
