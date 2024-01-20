import InitPage from "@/components/index/home/templates/InitPage";
import InitStepper from "@/components/index/home/organisms/InitStepper";
import { PageMapperType } from "@/types/Common";
import { Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import { IndexPageState } from "@/components/index/all-common/states/Step";
import Lecture from "@/components/index/lecture/templates/Lecture";
import BasicInfo from "@/components/index/basic-info/templates/BasicInfo";
import Staff from "@/components/index/staff/templates/Staff";
import Student from "@/components/index/student/templates/Student";
import StepLayout from "@/components/index/all-common/templates/StepLayout";
import { useState } from "react";

const Index = () => {
  const page = useRecoilValue(IndexPageState);
  const [isNext, setNext] = useState<boolean>(false);

  const pages: PageMapperType = {
    main: <InitPage />,
    basicInfo: <BasicInfo />,
    lecture: <Lecture />,
    staff: <Staff />,
    student: <Student />,
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: 5 }}
    >
      <InitStepper />
      {page === "main" ? (
        pages[page]
      ) : (
        <StepLayout isNext={isNext} pageName={page}>
          {pages[page]}
        </StepLayout>
      )}
    </Stack>
  );
};

export default Index;
