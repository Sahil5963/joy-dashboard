import { List, styled, Typography, useColorScheme, useTheme } from "@mui/joy";
import { THEME } from "constants/ui";
import React from "react";
import { TiHome } from "react-icons/ti";
import { RiSettings3Fill } from "react-icons/ri";
import MenuItem from "./MenuItem";
import logoWhite from "../../../assets/svg/logo-white.svg";
import logoDark from "../../../assets/svg/logo-dark.svg";

export type MenuItemD = {
  id: number;
  child?: MenuItemD[];
  label: string;
  icon?: any;
  link?: string;
};

const ITEMS: MenuItemD[] = [
  {
    id: 1,
    label: "Dashboard",
    child: [
      {
        id: 1,
        label: "Home",
        icon: <TiHome />,
        link: "/dashboard/home",
      },
      {
        id: 2,
        label: "Fine-tunes",
        icon: <TiHome />,

        link: "/dashboard/fine-tune",
        child: [
          {
            id: 1,
            label: "Table",
            link: "/dashboard/fine-tune/table",
          },
          {
            id: 2,
            label: "Details",
            link: "/dashboard/fine-tune/details",
          },
          {
            id: 3,
            label: "Create",
            link: "/dashboard/fine-tune/create",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Settings",
    child: [
      {
        id: 1,
        label: "Settings",
        icon: <RiSettings3Fill />,
        link: "/dashboard/settings",
      },
    ],
  },
];

export default function Sidebar() {
  const { mode } = useColorScheme();

  return (
    <Root className="deskSidebar">
      <div className=" h-8 my-8 flex items-center justify-center">{mode === "dark" ? <img src={logoWhite} className="h-full" /> : <img src={logoDark} className="h-full" />}</div>

      <div className="px-4 py-8 flex flex-col gap-6">
        {ITEMS.map((i) => {
          return (
            <div>
              <div className="mb-2">
                <Typography fontWeight="lg" level="body2" sx={(theme) => ({ color: theme.palette.text.tertiary, textTransform: "uppercase" })}>
                  {i.label}
                </Typography>
              </div>

              <div className="flex flex-col gap-2">
                {i.child?.map((i2) => {
                  return <MenuItem {...i2} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Root>
  );
}

const Root = styled("div")(({ theme }) => {
  return {
    width: THEME.sidebarWidth,
    height: "100vh",
    position: "fixed",
    zIndex: 3,
    background: theme.vars.palette.background.level1,
  };
});
