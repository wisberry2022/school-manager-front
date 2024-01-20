import BasicInfo from "@/components/index/basic-info/templates/BasicInfo";
import { IndexPageState } from "@/components/index/home/states/Step";
import InitPage from "@/components/index/home/templates/InitPage";
import InitStepper from "@/components/index/home/organisms/InitStepper";
import { PageMapperType } from "@/types/Common";
import { Stack } from "@mui/material";
import { useRecoilValue } from "recoil";
import Lecture from "@/components/index/lecture/templates/Lecture";
import Staff from "@/components/index/staff/templates/Staff";
import Student from "@/components/index/student/templates/Student";

const Index = () => {
  const page = useRecoilValue(IndexPageState);

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
      {pages[page]}
    </Stack>
  );
};

export default Index;
