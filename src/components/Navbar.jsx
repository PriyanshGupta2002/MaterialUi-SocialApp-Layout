import { Handshake, Mail, Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, styled, Toolbar, Typography, InputBase, Badge, Avatar, Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Styledtoolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  color: "black",
  width: "40%",
  display: "flex",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
    alignItems:"center",
    gap:"1rem",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems:"center",
  gap:"0.6rem",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));



const Navbar = () => {

  const [clicked, setclicked] = useState(false)

  const setisClicked=()=>{
    setclicked(true)
  }

 

  return (
    <AppBar position="sticky" >
      <Styledtoolbar >
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Meetbook
        </Typography>
        <Handshake sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchIcon />
          <InputBase placeholder="Search...." sx={{ width: "100%" }} />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>

          
          <Avatar sx={{width:"30px",height:"30px"}} onClick={setisClicked} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          
        </Icons>

        <UserBox>
        <Avatar sx={{width:"30px",height:"30px"}}  onClick={setisClicked}  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Typography variant="span">
          John Wick
        </Typography>
        </UserBox>
      </Styledtoolbar>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={clicked}
        onClose={(e)=>setclicked(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  );
};

export default Navbar;
