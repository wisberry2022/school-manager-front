import { useStep } from "@/components/index/hooks/useStep";
import { IndexPageState } from "@/components/index/states/Step";
import InitPage from "@/components/index/templates/InitPage";
import InitStepper from "@/components/index/templates/InitStepper";
import { PageMapperType } from "@/components/index/types/IndexTypes";
import { ElementStyle } from "@/styles/StyleObject";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";

const Index = () => {
  const steps = useStep();
  const page = useRecoilValue(IndexPageState);

  console.log(steps.step, page);

  const pages: PageMapperType = {
    main: <InitPage goPage={steps.goPage} />,
    basicInfo: <div>기초업무등록</div>,
    lecture: <div>수업 정보 등록</div>,
    staff: <div>교직원 정보 등록</div>,
    student: <div>학생 정보 등록</div>,
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: 5 }}
    >
      <InitStepper step={steps.step} />
      {pages[page]}
    </Stack>
  );
};

export default Index;
