import { memo } from "react";
import TemplatePage from "../TemplatePage";
import { useUser } from "../../app/providers/UserProvider/context";
import { DefaultContent } from "../../components/DefaultContent";
import { InfoData } from "../MainPage/Offer/Offer.styled";

const ProfilePage = memo(() => {
  const { user } = useUser();
  return (
    <TemplatePage
      sideContent={{
        content: (
          <DefaultContent title={user?.name}>
            <InfoData>{user?.email}</InfoData>
          </DefaultContent>
        ),
      }}
      mainContent={{
        header: <></>,
        content: (
          <DefaultContent>
            {user &&
              Object.values(user?.details).map((detail) => (
                <InfoData>{detail}</InfoData>
              ))}
          </DefaultContent>
        ),
      }}
    />
  );
});

export default ProfilePage;
