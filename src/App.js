import "./App.css";
import BasicTable from "./components/Table";
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
        },
      }),// eslint-disable-next-line
    [prefersDarkMode]
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1 style={{color: theme.palette.text.primary}}>Phasmophobia Checklist</h1>
        <BasicTable></BasicTable>
      </ThemeProvider>
    </div>
  );
}

export default App;
