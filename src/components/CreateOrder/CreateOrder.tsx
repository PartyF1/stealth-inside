import { useState } from "react";
import { DefaultForm } from "../Form";
import { ButtonContainer } from "../../pages/RegistrationPage/ui/ButtonContainer/ButtonContainer.styled";
import { Button } from "../../shared/ui/Button";
import { ButtonType, Dimension } from "../../shared/types/enums";
import { offerDataField } from "./dataField";
import { useNavigate } from "react-router-dom";
import { createOffer } from "./api";

export interface IOfferData {
  id?: string;
  token?: string;
  name?: string;
  location?: string;
  description?: string;
  cost?: string;
  conditions?: string;
}

export const useCreateOffer = (
  userId: string,
  onSubmit?: (response: IOfferData) => unknown
) => {
  const [offerData, setOfferData] = useState<IOfferData>({});
  const navigate = useNavigate();

  const handleOnClick = async () => {
    if (userId) {
      try {
        const response = await createOffer(offerData, userId);
        if (onSubmit && response?.id) {
          onSubmit(response);
        } else if (response?.id) {
          navigate(`/offers/${response.id}`);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return {
    header: <></>,
    content: (
      <DefaultForm
        form={offerData}
        onChange={setOfferData}
        formData={offerDataField}
      />
    ),
    footer: (
      <ButtonContainer>
        <Button
          dimension={Dimension.NARROW}
          type={ButtonType.SECONDARY}
          onClick={handleOnClick}
        >
          ОТПРАВИТЬ
        </Button>
      </ButtonContainer>
    ),
  };
};
