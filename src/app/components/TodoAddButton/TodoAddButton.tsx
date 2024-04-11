import { SpeedDial } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface TodoAddButtonProps {
  onClick?: () => void;
}

export const TodoAddButton = ({ onClick }: TodoAddButtonProps) => {
  return (
    <SpeedDial
      ariaLabel="Add"
      icon={<AddIcon></AddIcon>}
      onClick={onClick}
    ></SpeedDial>
  );
};
