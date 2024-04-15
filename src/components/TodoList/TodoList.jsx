import { styled } from "@mui/material";

export const TodoList = ({
  items = [],
}) => {
  return (
    <Wrapper>
      {
        items.map((item, index) => {
          return (
            <li
              key={index}
            >
              { item }
            </li>
          );
        })
      }
    </Wrapper>
  );
};

const Wrapper = styled('ul')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(1)};
  list-style: none;
  padding: 0;
`;
