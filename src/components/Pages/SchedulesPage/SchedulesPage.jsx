'use client'

import { TodoItem } from "@/components/TodoItem";
import { TodoList } from "@/components/TodoList";
import { styled } from "@mui/material";
import { useState } from "react";

export const SchedulesPage = () => {
  const [todoItems, setTodoItems] = useState([
    { name: '마트 장보기', memo: '오늘 저녁 음식 살거' },
    { name: '마트 장보기', memo: '오늘 저녁 음식 살거' },
    { name: '마트 장보기', memo: '오늘 저녁 음식 살거' },
    { name: '마트 장보기', memo: '오늘 저녁 음식 살거' },
  ]);

  return (
    <Wrapper>
      <TodoList
        items={
          todoItems.map(({ name, memo }, index) => {
            return (
              <TodoItem
                key={index}
                name={name}
                memo={memo}
              />
            );
          })
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled('main')``;
