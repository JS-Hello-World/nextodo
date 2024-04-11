import { Checkbox, styled, Typography } from "@mui/material";

interface TodoItemProps {
  name: string;
  note: string;
}

export const TodoItem = ({ name, note }: TodoItemProps) => {
  return (
    <Wrapper>
      <CheckboxWrapper>
        <Checkbox></Checkbox>
      </CheckboxWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Typography
            variant="body1"
          >
            { name }
          </Typography>
        </TitleWrapper>
        <Typography
          variant="caption"
        >
          { note }
        </Typography>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const CheckboxWrapper = styled('div')``;

const ContentWrapper = styled('div')``;

const TitleWrapper = styled('div')`
  margin-bottom: 2px;
`;