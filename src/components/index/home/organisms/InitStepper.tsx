import { MainStepperSet } from "@/constants/StepperSet";
import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { StepState } from "../../all-common/states/Step";
import StepperCore from "../../all-common/organisms/StpperCore";

const InitStepper: FC = () => {
  const step = useRecoilValue(StepState);

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{ marginBottom: "1.2rem", width: "100%" }}
    >
      <Stack sx={{ width: "40%" }}>
        <Box sx={{ width: "100%" }}>
          <StepperCore step={step} stepperSet={MainStepperSet} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default InitStepper;
