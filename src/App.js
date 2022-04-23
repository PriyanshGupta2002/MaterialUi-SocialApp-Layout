import { Box,createTheme,Stack,ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feedbar from "./components/Feedbar";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {

const [mode, setMode]= useState("light")

const darkTheme= createTheme({
  palette:{
    mode:mode
  }
})

const changeTheme=()=>{
  if (mode==="dark") {
    setMode("light")
  }
  else{
    setMode("dark")
  }
}
  
  return (
    <ThemeProvider theme={darkTheme} >
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row"   sx={{marginLeft:{xs:"0",sm:"16px"}}} justifyContent="space-between">
      <Sidebar changeTheme={changeTheme}/>
      <Feedbar/>
      <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
