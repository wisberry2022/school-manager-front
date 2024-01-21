import { FieldCheckValidateArray } from "@/hooks/useValidation";
import { QualifiedService } from "@/services/QualifiedService";
import { ElementStyle } from "@/styles/StyleObject";
import { QualifiedRegisterType } from "@/types/domain/Qualified";
import { Button, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { QualifiedSendData, QualifiedSet } from "../constants/DefaultData";
import QualifiedForm from "../molecules/QualifiedForm";
import { QualifiedType } from "../types/QualifiedTypes";

const Qualified: FC = () => {
  const [item, setItem] = useState<QualifiedRegisterType[]>(QualifiedSendData);
  const requiredsFields: string[] = ["code"];
  const requiredsType: QualifiedType[] = [
    "PRINCIPLE",
    "VICE_PRINCIPLE",
    "LICENSED",
  ];

  const setCode = (name: string, code: string) => {
    setItem((prev) => {
      const target = prev.find((data) => data.name === name);
      return prev
        .filter((p) => p.name !== name)
        .concat({ ...target, code: code } as QualifiedRegisterType);
    });
  };

  const checkRequire: FieldCheckValidateArray<QualifiedRegisterType> = (
    callback,
    target,
    require,
    ...fields
  ) => {
    const first = require.every(
      (r) => target.filter((data) => data.type === r).length > 0
    );
    const result = first
      ? fields.every((field) => target.filter((data) => data[field]).length)
      : false;
    result && callback();
  };

  const coreSave = async () => {
    try {
      const sendData = item.filter((itm) => itm.code);
      await QualifiedService.bulkRegister(sendData);
    } catch (e) {}
  };

  const save = () => {
    checkRequire(coreSave, item, requiredsType, ...requiredsFields);
  };

  return (
    <Stack direction="column" sx={{ py: 2, gap: 3 }}>
      <Stack sx={{ marginBottom: 5, gap: 0.5 }}>
        <Typography component="p">
          교직원 등록 시, 해당 교직원의 계약 형태 및 역할에 따른 종류를 설정 할
          수 있습니다. 필수 설정이 아닐 경우, 설정하지 않을 수 있습니다.
        </Typography>
        <Typography variant="caption" sx={{ color: "#ff0000" }}>
          * 표시는 필수 설정 값으로 미설정 불가
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ gap: 5, marginBottom: 3 }}
      >
        {QualifiedSet.map((qualified) => (
          <QualifiedForm
            key={qualified.id}
            field={qualified}
            setCode={setCode}
            item={item}
          />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{ gap: 1 }}>
        <Button variant="contained" sx={ElementStyle.button} onClick={save}>
          저장
        </Button>
        <Button variant="outlined" sx={ElementStyle.button}>
          취소
        </Button>
      </Stack>
    </Stack>
  );
};

export default Qualified;
