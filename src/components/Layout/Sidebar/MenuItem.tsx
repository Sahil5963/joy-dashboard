import { List, ListItem, ListItemButton, ListItemDecorator, styled, Typography } from "@mui/joy";
import React, { useState } from "react";
import { MenuItemD } from ".";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function MenuItem(p: MenuItemD) {
  const loc = useLocation();
  const activeMain = loc.pathname.includes(p.link || "");

  return (
    <>
      <Item to={p.link || ""} className="flex gap-2 items-center rounded-md py-2 px-2" sx={(theme) => ({ background: activeMain ? theme.palette.background.level2 : "transparent" })}>
        <Icon className="flex items-center justify-center">{p.icon}</Icon>
        <Typography>{p.label}</Typography>

        {p.child && (
          <div className={`ml-auto ${loc.pathname.includes(p.link || "") ? "rotate-180" : ""}`}>
            <RiArrowDropDownLine size={24} />
          </div>
        )}
      </Item>

      {loc.pathname.includes(p.link || "") && p.child && (
        <div>
          {p.child?.map((i) => {
            return (
              <SubItem to={i.link || p.link || ""} className="py-2" sx={(theme) => ({ color: loc.pathname.includes(i.link || "") ? theme.palette.text.primary : theme.palette.text.tertiary })}>
                {i.label}
              </SubItem>
            );
          })}
        </div>
      )}
    </>
  );
}

const Item = styled(Link)(({ theme }) => {
  return {
    ":hover": {
      background: theme.palette.background.level2,
      transition: "all .2s",
    },
  };
});
const Icon = styled("div")(({ theme }) => {
  return {
    height: 24,
    aspectRatio: 1,
  };
});
const SubItem = styled(Link)(({ theme }) => {
  return {
    marginLeft: 32,
    display: "block",
    ":hover": {
      color: theme.palette.text.primary,
      transition: "all .2s",
    },
  };
});
