import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Login from "./containers/auth/login";

function App() {
  return (
    <CssVarsProvider
      defaultMode="dark"
      //
      // the local storage key to use
      modeStorageKey="joyTheme"
      //
      // set as root provider
      // disableNestedContext
    >
      <div className="">
        <Login />
      </div>
    </CssVarsProvider>
  );
}

export default App;
