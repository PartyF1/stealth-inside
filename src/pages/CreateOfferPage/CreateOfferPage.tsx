import { memo } from "react";
import { useCreateOffer } from "../../components/CreateOrder";
import { useUser } from "../../app/providers/UserProvider/context";
import TemplatePage from "../TemplatePage";

const CreateOfferPage = memo(() => {
  const { user } = useUser();
  const createOffer = useCreateOffer(user?.id ?? "");

  return <TemplatePage mainContent={createOffer} />;
});

export default CreateOfferPage;
