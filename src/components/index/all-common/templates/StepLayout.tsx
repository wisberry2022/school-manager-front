import { ElementStyle } from "@/styles/StyleObject";
import { Button, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { useRecoilState } from "recoil";
import { StepState } from "../states/Step";
import { TitleSet } from "../constants/DefaultData";

type StepLayoutProp = {
  pageName: string;
  children: ReactNode;
};

const StepLayout: FC<StepLayoutProp> = (props) => {
  const { children, pageName } = props;
  const [page, setPage] = useRecoilState(StepState);

  const goPrev = () => {
    setPage(page >= 0 ? page - 1 : -1);
  };

  const goNext = () => {
    setPage(page < 4 ? page + 1 : -1);
  };

  return (
    <Stack direction="column" sx={{ gap: 2.5 }}>
      <Typography variant="h4">{TitleSet[pageName]}</Typography>
      {children}
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

export default StepLayout;
