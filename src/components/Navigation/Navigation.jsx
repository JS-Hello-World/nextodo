import { styled } from "@mui/material";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  return (
    <Wrapper>
      <NavigationItem
        label="Schedules"
        href="/"
      />
      <NavigationItem
        label="Memo"
        href="/memo"
      />
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  width: 250px;
`;
