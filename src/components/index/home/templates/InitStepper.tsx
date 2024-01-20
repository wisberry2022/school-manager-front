import { StepperSet } from "@/constants/StepperSet";
import { BasicStepType } from "@/types/Common";
import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { FC, useState } from "react";

type InitStepperProp = {
  step: number;
};

const InitStepper: FC<InitStepperProp> = (prop) => {
  const { step } = prop;

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{ marginBottom: "1.2rem", width: "100%" }}
    >
      <Stack sx={{ width: "40%" }}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {Object.keys(StepperSet).map((val) => {
              const { id, label } = StepperSet[val as BasicStepType];
              return (
                <Step key={id} sx={{ width: "50rem" }}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Stack>
    </Stack>
  );
};

export default InitStepper;