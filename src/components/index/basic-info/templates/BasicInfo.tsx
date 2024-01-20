import { ElementStyle } from "@/styles/StyleObject";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { StepState } from "../../all-common/states/Step";

const BasicInfo: FC = () => {
  const setPage = useSetRecoilState(StepState);

  return (
    <Stack direction="column" sx={{ gap: 2.5 }}>
      <Typography component="p" sx={{ marginBottom: "4rem" }}>
        교직원 유형, 직위, 업무 정보를 세팅 할 수 있습니다.
      </Typography>
      <Stack direction="row">
        <Box>
          <Typography variant="h5">STEP01. 교직원 유형 설정</Typography>
          <Divider color="#ff0000" sx={{ width: "16rem" }} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default BasicInfo;
