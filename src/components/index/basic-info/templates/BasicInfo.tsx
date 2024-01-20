import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { IndexPageState } from "../../all-common/states/Step";
import StepperCore from "../../all-common/organisms/StpperCore";
import { BasicInfoStepperSet } from "../constants/StepperSet";
import { BasicInfoStepState } from "../states/BasicStep";

const BasicInfo: FC = () => {
  const page = useRecoilValue(IndexPageState);
  const step = useRecoilValue(BasicInfoStepState);

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
      <Typography component="p">
        교직원 유형, 직위 등을 설정 할 수 있습니다.
      </Typography>
    </Stack>
  );
};

export default BasicInfo;
