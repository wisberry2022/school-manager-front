import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

const QualifiedSet = [
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

const Qualified: FC = () => {
  return (
    <Stack direction="column" sx={{ py: 2 }}>
      <Stack sx={{ marginBottom: 5, gap: 0.5 }}>
        <Typography component="p">
          교직원 등록 시, 해당 교직원의 계약 형태 및 역할에 따른 종류를 설정 할
          수 있습니다. 필수 설정이 아닐 경우, 설정하지 않을 수 있습니다.
        </Typography>
        <Typography variant="caption" sx={{ color: "#ff0000" }}>
          * 표시는 필수 설정 값으로 미설정 불가
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{ gap: 5 }}>
        {QualifiedSet.map((qualified) => {
          const { id, name, type, required, contents } = qualified;
          return (
            <Stack
              direction="row"
              key={id}
              justifyContent="space-between"
              sx={{ width: "20%" }}
            >
              <Stack direction="row">
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
                {required && (
                  <Typography sx={{ color: "#ff0000" }}>*</Typography>
                )}
              </Stack>
              <Stack sx={{ gap: 1.5 }}>
                {contents.map((content) => {
                  return (
                    <TextField
                      key={content.id}
                      label={content.label}
                      name={content.name}
                      defaultValue={content.defaultValue}
                      disabled={!!content.defaultValue}
                    />
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Qualified;
