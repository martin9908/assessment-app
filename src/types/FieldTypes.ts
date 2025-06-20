export interface FieldItemTypes {
  Type: string;
  Text: string;
  ID?: string;
  Placeholder?: string;
  Title?: string;
  AlertMessage?: string;
}

export interface FieldTypes {
  fields: FieldItemTypes[];
}
