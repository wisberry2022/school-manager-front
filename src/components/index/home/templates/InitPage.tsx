import { ElementStyle } from "@/styles/StyleObject";
import { OnetoVoid } from "@/types/Funcs";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { StepState } from "../states/Step";

const InitPage: FC = () => {
  const goPage = useSetRecoilState(StepState);

  return (
    <>
      <Stack alignItems="center" sx={{ gap: 2.5 }}>
        <Avatar sx={{ width: 100, height: 100 }}></Avatar>
        <Typography variant="h5">
          School Manager를 처음 이용 하시나요?
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ gap: 2.5 }}>
        <Button
          variant="contained"
          sx={ElementStyle.button}
          onClick={(e) => {
            goPage(0);
          }}
        >
          네
        </Button>
        <Button variant="outlined" sx={ElementStyle.button}>
          아니요
        </Button>
      </Stack>
    </>
  );
};

export default InitPage;
