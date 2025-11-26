export interface ITemplatePage {
  sideContent?: IPageContent;
  mainContent?: IPageContent;
}

interface IPageContent {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}
