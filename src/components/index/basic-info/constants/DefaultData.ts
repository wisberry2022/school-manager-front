import { FieldType } from "../types/QualifiedTypes";

export const QualifiedSet: FieldType[] = [
  {
    id: 1,
    name: "교장",
    type: "PRINCIPLE",
    required: true,
    contents: [
      {
        id: 1,
        name: "code",
        label: "유형 코드",
        defaultValue: null,
      },
      {
        id: 2,
        name: "name",
        label: "교직원 유형",
        defaultValue: "교장",
      },
    ],
  },
  {
    id: 2,
    name: "교감",
    type: "VICE_PRINCIPLE",
    required: true,
    contents: [
      {
        id: 1,
        name: "code",
        label: "유형 코드",
        defaultValue: null,
      },
      {
        id: 2,
        name: "name",
        label: "교직원 유형",
        defaultValue: "교감",
      },
    ],
  },
  {
    id: 3,
    name: "정교사",
    type: "LICENSED",
    required: true,
    contents: [
      {
        id: 1,
        name: "code",
        label: "유형 코드",
        defaultValue: null,
      },
      {
        id: 2,
        name: "name",
        label: "교직원 유형",
        defaultValue: "정교사",
      },
    ],
  },
  {
    id: 4,
    name: "계약직",
    type: "CONTRACT",
    required: false,
    contents: [
      {
        id: 1,
        name: "code",
        label: "유형 코드",
        defaultValue: null,
      },
      {
        id: 2,
        name: "name",
        label: "교직원 유형",
        defaultValue: "계약직",
      },
    ],
  },
];
