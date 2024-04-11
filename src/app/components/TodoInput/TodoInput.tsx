import { styled, TextField } from "@mui/material";
import { memo, useState } from "react";

interface TodoInputProps {
  name: string;
  note: string;
  onChangeName: (name: string) => void;
  onChangeNote: (note: string) => void;
}

export const TodoInput = ({
  name,
  note,
  onChangeNote,
  onChangeName,
}: TodoInputProps) => {
  return (
    <Wrapper>
      <TextField
        value={name}
        label="할 일"
        onChange={(e) => onChangeName(e.currentTarget.value)}
      ></TextField>
      <TextField
        value={note}
        label="노트"
        onChange={(e) => onChangeNote(e.currentTarget.value)}
      ></TextField>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
