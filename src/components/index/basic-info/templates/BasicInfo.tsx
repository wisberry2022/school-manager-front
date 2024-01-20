import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { StepState } from "../../all-common/states/Step";
import { Button, Stack, Typography } from "@mui/material";
import { ElementStyle } from "@/styles/StyleObject";

const BasicInfo: FC = () => {
  const setPage = useSetRecoilState(StepState);

  const goPrev = () => {
    setPage(-1);
  };

  const goNext = () => {
    setPage(1);
  };

  return (
    <Stack direction="column" sx={{ gap: 2.5 }}>
      <Typography variant="h4">기초업무등록</Typography>
      <Stack direction="row" sx={{ gap: 1 }}>
        <Button variant="outlined" sx={ElementStyle.button} onClick={goPrev}>
          이전
        </Button>
        <Button variant="contained" sx={ElementStyle.button} onClick={goNext}>
          다음
        </Button>
      </Stack>
    </Stack>
  );
};

export default BasicInfo;
