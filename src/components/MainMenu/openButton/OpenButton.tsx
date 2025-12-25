import { useState } from "react";
import { SideMenu } from "../MainMenu";
import { Button } from "../../../shared/ui/Button";
import { ButtonWrapper } from "../MainMenu.styled";

export const OpenButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setOpen(true)}>МЕНЮ</Button>
      </ButtonWrapper>
      <SideMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
