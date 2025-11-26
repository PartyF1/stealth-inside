import {
  PageWrapper,
  SideContent,
  MainContent,
  Splitter,
  SplitterLine,
  Header,
} from "./TemplatePage.styled";
import type { ITemplatePage } from "./types";

const TemplatePage = ({ sideContent, mainContent }: ITemplatePage) => {
  return (
    <PageWrapper>
      <SideContent>
        <Header>{sideContent?.header && <>{sideContent.header}</>}</Header>
        {sideContent?.content && <>{sideContent.content}</>}
        {sideContent?.footer && <>{sideContent.footer}</>}
      </SideContent>

      <Splitter>
        <SplitterLine />
        <SplitterLine />
        <SplitterLine />
      </Splitter>

      <MainContent>
        <Header>{mainContent?.header && <>{mainContent.header}</>}</Header>
        {mainContent?.content && <>{mainContent.content}</>}
        {mainContent?.footer && <>{mainContent.footer}</>}
      </MainContent>
    </PageWrapper>
  );
};

export default TemplatePage;
