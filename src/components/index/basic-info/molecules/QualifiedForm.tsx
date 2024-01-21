import React, { FC } from "react";
import { FieldType } from "../types/QualifiedTypes";
import { Stack, TextField, Typography } from "@mui/material";

type QualifiedFormProp = {
  field: FieldType;
};

const QualifiedForm: FC<QualifiedFormProp> = (props) => {
  const { field } = props;
  const { id, name, type, required, contents } = field;
  return (
    <Stack
      direction="row"
      key={id}
      justifyContent="space-between"
      sx={{ width: "20%" }}
    >
      <Stack direction="row">
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
        {required && <Typography sx={{ color: "#ff0000" }}>*</Typography>}
      </Stack>
      <Stack sx={{ gap: 1.5 }}>
        {contents.map((content) => {
          return (
            <TextField
              key={content.id}
              label={content.label}
              name={content.name}
              defaultValue={content.defaultValue}
              disabled={!!content.defaultValue}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default QualifiedForm;
