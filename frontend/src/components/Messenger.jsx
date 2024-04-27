import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = styled(AppBar)`
  height: 210px;
  background-color: #05a884;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background-color: #f0f2f5;
`;

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>
          <WhatsAppIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "40px",
            }}
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
            WhatsApp Clone
          </Typography>
          <LoginDialog />
        </Toolbar>
      </Header>
    </Component>
  );
};

export default Messenger;
