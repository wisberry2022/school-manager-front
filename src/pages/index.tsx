import BasicInfo from "@/components/index/basic-info/templates/BasicInfo";
import { IndexPageState } from "@/components/index/home/states/Step";
import InitPage from "@/components/index/home/templates/InitPage";
import InitStepper from "@/components/index/home/templates/InitStepper";
import { PageMapperType } from "@/types/Common";
import { Stack } from "@mui/material";
import { useRecoilValue } from "recoil";

const Index = () => {
  const page = useRecoilValue(IndexPageState);

  const pages: PageMapperType = {
    basicInfo: <div>기초업무등록</div>,
    main: <InitPage />,
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
      <InitStepper />
      {pages[page]}
    </Stack>
  );
};

export default Index;
