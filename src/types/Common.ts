import { ReactNode } from "react";
import { OnetoVoid } from "./Funcs";

export type NavItem = {
  id: number;
  name: string;
  isDefault?: boolean;
  subNav?: NavItem;
  url: string;
};

export type Nav = {
  [key: string]: NavItem;
};

export type BasicStepType = "BASICINFO" | "LECTURE" | "STAFF" | "STUDENT";

export type StepType = {
  id: number;
  label: string;
};

export type StepperSetType = {
  [key in BasicStepType]: StepType;
};

export type PageType<T> = {
  step: T;
  goPage: OnetoVoid<T>;
};

export type PageMapperType = {
  [key: string]: ReactNode;
};
