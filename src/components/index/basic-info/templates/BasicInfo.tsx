import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import StepperCore from "../../all-common/organisms/StpperCore";
import { BasicInfoStepperSet } from "../constants/StepperSet";
import { BasicInfoStepState } from "../states/BasicStep";
import StepLayout from "../../all-common/templates/StepLayout";
import { ElementStyle } from "@/styles/StyleObject";
import { StepState } from "../../all-common/states/Step";

const BasicInfo: FC = () => {
  const step = useRecoilValue(BasicInfoStepState);
  const setPage = useSetRecoilState(StepState);

  return (
    <Stack direction="column" sx={{ gap: 2.5 }}>
      <Stack direction="row" alignSelf="flex-end" sx={{ width: "60%" }}>
        <Stack
          justifyContent="flex-end"
          sx={{ marginLeft: "auto", width: "50%" }}
        >
          <StepperCore step={step} stepperSet={BasicInfoStepperSet} />
        </Stack>
      </Stack>

      <Stack
        justifyContent="flex-end"
        direction="row"
        sx={{ width: "100%", gap: 1.5 }}
      >
        <Button
          sx={ElementStyle.button}
          variant="outlined"
          onClick={() => setPage(-1)}
        >
          이전
        </Button>
        <Button sx={ElementStyle.button} variant="contained">
          다음
        </Button>
      </Stack>
    </Stack>
  );
};

export default BasicInfo;
