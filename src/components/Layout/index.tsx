import styled from "@emotion/styled";
import { Button, Sheet } from "@mui/joy";
import ThemeToggle from "components/ThemeToggle";
import { THEME } from "constants/ui";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <Root className="flex">
      <Sidebar />

      <main className="flex flex-col flex-1">
        <Appbar />

        <Sheet className="flex-1" sx={(theme) => ({ background: theme.palette.background.surface })}>
          <Outlet />
        </Sheet>
      </main>
    </Root>
  );
}
const Root = styled(Sheet)`
  min-height: 100vh;
  main {
    margin-left: ${THEME.sidebarWidth}px;
  }

  .deskSidebar {
    /* display: none; */
  }
`;
