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
      <Stack direction="row" justifyContent="center" sx={{ gap: 1 }}>
        <Button variant="contained" sx={ElementStyle.button}>
          저장
        </Button>
        <Button variant="outlined" sx={ElementStyle.button}>
          취소
        </Button>
      </Stack>
    </Stack>
  );
};

export default BasicInfoLayout;
