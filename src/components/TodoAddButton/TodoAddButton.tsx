import { SpeedDial } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const TodoAddButton = ({
  onClick = undefined,
}) => {
  return (
    <SpeedDial
      ariaLabel=""
      icon={<AddIcon></AddIcon>}
      onClick={onClick?.()}
    />
  );
};
