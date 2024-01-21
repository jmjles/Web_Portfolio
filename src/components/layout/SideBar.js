import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { about, home, navLine, pc } from "../../assets";
import { navs } from "../../utils/nav";
export default function SideBar(props) {
  const [open, toggleOpen] = props.open;
  const view = props.view;
  return (
    <Drawer
      className="SidebarRoot"
      open={open}
      onClose={toggleOpen}
      anchor="right"
      hideBackdrop
    >
      {navs.map((n) => (
        <Box>
          <List>
            <ListItem
              onClick={() => {
                n.scrollTo();
                toggleOpen();
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{n.icon}</ListItemIcon>
                <ListItemText primary={n.name} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ))}
    </Drawer>
  );
}
