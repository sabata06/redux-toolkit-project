import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // user bilgisini global stateden oku
  const user = false;
  const handleLogout = () =>{
    //burada user state globalden boşaltılmalı
    navigate("/login")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            World News
          </Typography>
          {user && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
          {!user && <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}