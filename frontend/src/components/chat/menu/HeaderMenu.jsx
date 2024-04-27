import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 10px 60px 5px 24px;
  color: #4a4a4a;
`;
const HeaderMenu = () => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
