import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightHeader = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt='profile img' />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightHeader>
        <Search />
        <MoreVert />
      </RightHeader>
    </Header>
  );
};

export default ChatHeader;
