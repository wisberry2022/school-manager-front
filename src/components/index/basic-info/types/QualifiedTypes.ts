type QualifiedType = "PRINCIPLE" | "VICE_PRINCIPLE" | "LICENSED" | "CONTRACT";

export type ContentType = {
  id: number;
  name: string;
  label: string;
  defaultValue: string | null;
};

export type FieldType = {
  id: number;
  name: string;
  type: QualifiedType;
  required: boolean;
  contents: ContentType[];
};
