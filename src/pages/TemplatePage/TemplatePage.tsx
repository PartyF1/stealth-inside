import {
  PageWrapper,
  SideContent,
  MainContent,
  Splitter,
  SplitterLine,
  Header,
  Footer,
} from "./TemplatePage.styled";
import type { ITemplatePage } from "./types";

const TemplatePage = ({ sideContent, mainContent }: ITemplatePage) => {
  return (
    <PageWrapper>
      <SideContent>
        <Header>{sideContent?.header && <>{sideContent.header}</>}</Header>
        {sideContent?.content && <>{sideContent.content}</>}
        {sideContent?.footer && <Footer>{sideContent.footer}</Footer>}
      </SideContent>

      <Splitter>
        <SplitterLine />
        <SplitterLine />
        <SplitterLine />
      </Splitter>

      <MainContent>
        {mainContent?.header && <Header>{mainContent.header}</Header>}
        {mainContent?.content && <>{mainContent.content}</>}
        {mainContent?.footer && <Footer>{mainContent.footer}</Footer>}
      </MainContent>
    </PageWrapper>
  );
};

export default TemplatePage;
