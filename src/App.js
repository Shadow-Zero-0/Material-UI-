import { Box, createTheme, CssBaseline, Divider, Stack, ThemeProvider } from "@mui/material";
import AppBarr from "./AppBarr";
import Mylist from "./Mylist";
import Mycard from "./Mycard";
import Mynave from "./Mynave";
import { useState } from "react";
import Mypost from "./Mypost";



function App() {
  const [none, setnone] = useState('none');
  const [mode, setmode] = useState( localStorage.getItem('mode') === null
  ? "light"
  : localStorage.getItem('mode') === "light"
  ? "light"
  : "dark",);

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
           omar:{
            main: 'rgb(247,247,247)'
           }
           
          }
        : {
          omar:{
            main: null
           }
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
       <Box className={mode}>
      <AppBarr none={none}setnone={setnone}/>
      <Stack   divider={<Divider orientation="vertical" flexItem />} sx={{ flexDirection: "row" }}>
        <Mylist 
        {...{setmode,darkTheme,mode,none,setnone}}
        
        />
        <Mycard />
        <Mynave />
      </Stack>
      <Mypost/>
    </Box>
    </ThemeProvider>
   
  );
}

export default App;
