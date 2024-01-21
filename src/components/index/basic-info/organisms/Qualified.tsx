import { Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import QualifiedForm from "../molecules/QualifiedForm";
import { QualifiedSet } from "../constants/DefaultData";

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
        {QualifiedSet.map((qualified) => (
          <QualifiedForm key={qualified.id} field={qualified} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Qualified;
