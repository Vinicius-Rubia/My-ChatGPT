import React from "react";
import { Message } from "..";
import * as C from "./styles";

const messages = [
  {
    message: "Hello world",
    type: "USER",
    hour: "15:24"
  },
  {
    message: "Hello world",
    type: "IA",
    hour: "15:24"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "15:25"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "15:37"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "15:39"
  },
  {
    message: "Hello world",
    type: "IA",
    hour: "15:42"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "15:54"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "15:54"
  },
  {
    message: "Hello world",
    type: "USER",
    hour: "15:57"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "15:59"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "16:02"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "16:10"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "16:11"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "16:17"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "16:21"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "16:21"
  },
  {
    message: "Hello world",
    type: "USER",
    hour: "16:24"
  },
  {
    message: "Hello world",
    type: "IA",
    hour: "16:26"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "16:38"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "IA",
    hour: "16:47"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur",
    type: "USER",
    hour: "16:52"
  },
  {
    message: "Hello world",
    type: "IA",
    hour: "16:52"
  },
  {
    message: "Lorem Ipsum dolor sit amt consectetur dollor consert backnead",
    type: "USER",
    hour: "16:57"
  },
  {
    message: "Lorem Ipsum dolor sit",
    type: "IA",
    hour: "16:59"
  },
];

export const WindowChat: React.FC = () => {
  return (
    <C.Container>
      <Message messages={messages} />
    </C.Container>
  );
};
