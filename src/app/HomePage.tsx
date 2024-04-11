'use client'

import { styled } from "@mui/material";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoAddButton } from "./components/TodoAddButton/TodoAddButton";
import { TodoAddDialog } from "./components/TodoAddDialog/TodoAddDialog";
import { useState } from "react";
import { Todo } from "@/types/todo";

export const HomePage = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleTodoAdd = (name: string, note: string) => {
    setTodoItems([
      ...todoItems,
      {
        name,
        note,
        createdAt: new Date(),
      }
    ]);
  };

  return (
    <Wrapper>
      <TodoList>
        {
          todoItems.map(({ name, note }, index) => (
            <TodoItem
              key={index}
              name={name}
              note={note}
            ></TodoItem>
          ))
        }
      </TodoList>

      <TodoAddDialog
        show={isShowDialog}
        onClose={() => setIsShowDialog(false)}
        onSubmit={handleTodoAdd}
      ></TodoAddDialog>

      <TodoAddButtonWrapper>
        <TodoAddButton
          onClick={() => setIsShowDialog(true)}
        ></TodoAddButton>
      </TodoAddButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4, 2)};
`;

const TodoAddButtonWrapper = styled('div')`
  position: fixed;
  right: 24px;
  bottom: 64px;
`;
