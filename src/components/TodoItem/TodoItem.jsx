import { Paper, styled, Typography } from "@mui/material";

export const TodoItem = ({
  name = 'Todo Name',
  memo = 'This is memo',
}) => {
  return (
    <Wrapper>
      <Content>
        <Typography
          variant="body1"
        >
          { name }
        </Typography>
        <Typography
          variant="caption"
        >
          { memo }
        </Typography>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(1)};
`;
