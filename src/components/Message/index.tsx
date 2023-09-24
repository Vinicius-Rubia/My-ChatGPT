import React from "react";
import * as C from "./styles";

interface IMessage {
  messages: {
    message: string;
    type: string;
    hour: string;
  }[];
}

export const Message: React.FC<IMessage> = ({ messages }) => {
  return messages.map((message, index) => (
    <React.Fragment key={index}>
      <C.Message type={message.type}>{message.message}</C.Message>
      <C.Hour type={message.type}>{message.hour}</C.Hour>
    </React.Fragment>
  ));
};
