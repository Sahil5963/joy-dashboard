import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

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
      {/* <div className="">
        <Login />
      </div> */}

      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;
