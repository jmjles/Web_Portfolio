import { Grid, Typography as Font, Link } from "@mui/material";
import React from "react";
import { navs } from "../../utils/nav";
export default function Nav(props) {
  const view = props.view;
  return (
    <div className="Nav Desktop">
      <div style={{ position: "relative" }}>
        <Font fontWeight="bold" id="Logo" variant="h3">
          Jesus M
        </Font>
        <Grid container className="Container" justifyContent="space-around">
          {navs.map((n) => (
            <Grid item>
              <a
                onClick={() => n.scrollTo()}
                id={`Nav${n.name}`}
                style={{ color: n.location === view ? "#339cff" : "" }}
              >
                {n.name}
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
