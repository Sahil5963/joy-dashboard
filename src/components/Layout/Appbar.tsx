import { Sheet, Typography } from "@mui/joy";
import ThemeToggle from "components/ThemeToggle";
import { THEME } from "constants/ui";
import React from "react";

export default function Appbar() {
  return (
    <>
      <Sheet sx={(theme) => ({ height: THEME.appbarHeight, position: "sticky", width: "100%", background: theme.palette.background.level1, top: 0, alignItems: "center", display: "flex", justifyContent: "space-between", px: 2, zIndex: 4 })}>
        <Typography fontWeight="lg">Your GPT</Typography>
        <ThemeToggle />
      </Sheet>
    </>
  );
}
