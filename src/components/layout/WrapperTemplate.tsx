import { Stack } from "@mui/material";
import { FC, ReactNode } from "react";

type WrapperTemplateProp = {
  children: ReactNode;
};

const WrapperTemplate: FC<WrapperTemplateProp> = ({ children }) => {
  return (
    <Stack sx={{ marginTop: "2rem", boxShadow: 3, p: 3 }}>{children}</Stack>
  );
};

export default WrapperTemplate;
