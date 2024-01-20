import { StyleObject } from "@/styles/StyleObject";
import { Stack } from "@mui/material";
import { FC, ReactNode } from "react";

type WrapperTemplateProp = {
  children: ReactNode;
};

const WrapperTemplate: FC<WrapperTemplateProp> = ({ children }) => {
  return (
    <Stack sx={{ marginTop: "2rem", ...StyleObject.wrapper }}>{children}</Stack>
  );
};

export default WrapperTemplate;
