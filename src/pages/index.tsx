import { useStep } from "@/components/index/hooks/useStep";
import InitStepper from "@/components/index/templates/InitStepper";
import { ElementStyle } from "@/styles/StyleObject";
import {
  Avatar,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const Index = () => {
  const steps = useStep(-1);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: 5 }}
    >
      <InitStepper step={steps.step} />
      <Stack alignItems="center" sx={{ gap: 2.5 }}>
        <Avatar sx={{ width: 100, height: 100 }}></Avatar>
        <Typography variant="h5">
          School Manager를 처음 이용 하시나요?
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ gap: 2.5 }}>
        <Button variant="contained" sx={ElementStyle.button}>
          네
        </Button>
        <Button variant="outlined" sx={ElementStyle.button}>
          아니요
        </Button>
      </Stack>
    </Stack>
  );
};

export default Index;
