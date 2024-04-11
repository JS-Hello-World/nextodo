import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { TodoInput } from "../TodoInput/TodoInput";
import { useState } from "react";

interface TodoAddDialogProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (name: string, note: string) => void;
}

export const TodoAddDialog = ({ show, onClose, onSubmit }: TodoAddDialogProps) => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    onClose();
    onSubmit(name, note);
  };

  return (
    <Dialog
      open={show}
    >
      <DialogTitle>
        할 일 추가
      </DialogTitle>
      <DialogContent>
        <TodoInput
          name={name}
          note={note}
          onChangeName={setName}
          onChangeNote={setNote}
        ></TodoInput>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}>추가</Button>
      </DialogActions>
    </Dialog>
  );
};
