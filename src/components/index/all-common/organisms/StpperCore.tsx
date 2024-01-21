import { StepperSetType } from "@/types/Common";
import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { FC } from "react";

type StepperCoreType = {
  step: number;
  stepperSet: StepperSetType;
};

const StepperCore: FC<StepperCoreType> = (props) => {
  const { step, stepperSet } = props;

  return (
    <Stepper activeStep={step} alternativeLabel>
      {Object.keys(stepperSet).map((val) => {
        const { id, label } = stepperSet[val];
        return (
          <Step key={id} sx={{ width: "50rem" }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperCore;
