declare interface IFwpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'FwpWebPartStrings' {
  const strings: IFwpWebPartStrings;
  export = strings;
}
