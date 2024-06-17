import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const LoginHeader = styled(AppBar)`
  height: 210px;
  background-color: #05a884;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 140px;
  background-color: #05a884;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background-color: #f0f2f5;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>
              <img
                src='https://www.letstalk.academy/logo.png?v=13'
                alt="let's talk"
                style={{ width: "50px" }}
              />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Helvetica Neue",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Let's Talk App
              </Typography>
            </Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
