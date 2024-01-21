import { QualifiedType } from "@/components/index/basic-info/types/QualifiedTypes";

export type QualifiedRegisterType = {
  code: string | null;
  name: string;
  type: QualifiedType;
};
