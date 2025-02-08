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
      {navs.map((n,i) => (
        <Box key={i}>
          <List>
            <ListItem
              onClick={() => {
                n.scrollTo();
                toggleOpen();
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {n.icon(n.location === view ? "#339cff" : "black")}
                </ListItemIcon>
                <ListItemText
                  primary={n.name}
                  style={{ color: n.location === view ? "#339cff" : "" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ))}
    </Drawer>
  );
}
