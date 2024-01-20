import { ElementStyle } from "@/styles/StyleObject";
import { Button, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { useRecoilState } from "recoil";
import { TitleSet } from "../constants/DefaultData";
import { StepState } from "../states/Step";

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
    <Stack direction="column" sx={{ width: "100%", gap: 2.5 }}>
      <Stack direction="row" justifyContent="flex-start">
        <Typography variant="h4">{TitleSet[pageName]}</Typography>
      </Stack>
      {children}
      <Stack direction="row" sx={{ gap: 1 }} justifyContent="flex-end">
        <Button variant="outlined" sx={ElementStyle.button} onClick={goPrev}>
          이전
        </Button>
        <Button variant="contained" sx={ElementStyle.button} onClick={goNext}>
          {page === 3 ? "완료" : "다음"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default StepLayout;
