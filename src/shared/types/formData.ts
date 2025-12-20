export interface IFormField {
  label: string;
  key: string;
  type?: string;
}

export interface IFormData {
  title: string;
  fields: IFormField[];
}
