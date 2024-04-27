import { Dialog, Box } from "@mui/material";
const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: "0",
};
const ChatDialog = () => {
  return (
    <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Dialog>
  );
};

export default ChatDialog;
