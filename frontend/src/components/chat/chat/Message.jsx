import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 50%;
  margin-left: auto;
  padding: 7px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  margin-top: 10px;
  margin-right: 5px;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 50%;
  padding: 7px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  margin-top: 10px;
  margin-left: 5px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: auto;
  word-break: keep-all;
`;
const Message = ({ message }) => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
};

export default Message;
