import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import BasicInfoLayout from "../organisms/Layout";
import Qualified from "../organisms/Qualified";

const BasicInfo: FC = () => {
  return (
    <Stack direction="column" sx={{ gap: 2.5 }}>
      <Typography component="p" sx={{ marginBottom: "4rem" }}>
        교직원 유형, 직위, 업무 정보를 세팅 할 수 있습니다. 초기 설정 이후에도
        다시 설정 할 수 있습니다.
      </Typography>
      <Stack sx={{ gap: 5 }}>
        <BasicInfoLayout title="STEP01. 교직원 유형 설정">
          <Qualified />
        </BasicInfoLayout>
        <BasicInfoLayout title="STEP02. 직위 설정"></BasicInfoLayout>
        <BasicInfoLayout title="STEP03. 업무 설정"></BasicInfoLayout>
      </Stack>
    </Stack>
  );
};

export default BasicInfo;
