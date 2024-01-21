import { ElementStyle } from "@/styles/StyleObject";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type BasicInfoLayoutProp = {
  children?: ReactNode;
  title: string;
};

const BasicInfoLayout: FC<BasicInfoLayoutProp> = (props) => {
  const { children, title } = props;

  return (
    <Stack direction="column" sx={{ gap: 3 }}>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Divider />
      </Box>
      {children}
    </Stack>
  );
};

export default BasicInfoLayout;
