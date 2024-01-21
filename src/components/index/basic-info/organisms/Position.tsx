import {
  Button,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ElementStyle } from "@/styles/StyleObject";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const defaultRow = [{ id: 1, name: null, code: null }];

const createEmptyRow = (id: number) => {
  return { id: id, name: null, code: null };
};

const Position = () => {
  const [rows, setRow] = useState(defaultRow);

  const addRow = () => {
    const latestIds = Math.max(...rows.map((row) => row.id));
    setRow((prev) => prev.concat(createEmptyRow(latestIds + 1)));
  };

  const removeRow = (currentRow: number) => {
    setRow((prev) => prev.filter((row) => row.id !== currentRow));
  };

  return (
    <Stack direction="column" sx={{ py: 2, gap: 3 }}>
      <Stack sx={{ marginBottom: 5, gap: 0.5 }}>
        <Typography component="p">
          교직원의 직위를 설정 할 수 있습니다. 테이블 셀을 추가하여 직위를 추가
          할 수 있습니다. 모든 필드는 필수입력입니다.
        </Typography>
      </Stack>
      <Table sx={{ margin: "0 auto 2rem auto", width: "70%" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>직위명</StyledTableCell>
            <StyledTableCell>직위 코드</StyledTableCell>
            <StyledTableCell>ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.id}>
              <TableCell>
                <TextField name="name" placeholder="직위명을 입력하세요" />
              </TableCell>
              <TableCell>
                <TextField name="code" placeholder="직위 코드를 입력하세요" />
              </TableCell>
              <TableCell>
                <Stack direction="row" sx={{ gap: 0.5 }}>
                  <SvgIcon onClick={addRow}>
                    <AddCircleOutlineIcon />
                  </SvgIcon>
                  <SvgIcon
                    onClick={() => {
                      removeRow(row.id);
                    }}
                  >
                    {!(idx === 0 && rows.length === 1) && (
                      <RemoveCircleOutlineIcon />
                    )}
                  </SvgIcon>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack direction="row" justifyContent="center" sx={{ gap: 1 }}>
        <Button variant="contained" sx={ElementStyle.button} onClick={() => {}}>
          저장
        </Button>
        <Button variant="outlined" sx={ElementStyle.button}>
          취소
        </Button>
      </Stack>
    </Stack>
  );
};

export default Position;
