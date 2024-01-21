import React, { ChangeEventHandler, FC } from "react";
import { FieldType } from "../types/QualifiedTypes";
import { Stack, TextField, Typography } from "@mui/material";
import { QualifiedRegisterType } from "@/types/domain/Qualified";

type QualifiedFormProp = {
  field: FieldType;
  setCode: Function;
  item: QualifiedRegisterType[];
};

const QualifiedForm: FC<QualifiedFormProp> = (props) => {
  const { item, field, setCode } = props;
  const { id, name, type, required, contents } = field;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setCode(name, value, item);
  };

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
              onChange={onChange}
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
