import { Grid, Typography as Font } from "@mui/material";
import React, { useEffect, useState } from "react";
import { navs } from "../../utils/nav";
import { sendViewEvent } from "../../utils/ga";
export default function Nav(props) {
  const view = props.view;
  const [loc, setLoc] = useState(navs[0]);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (loc.location === view && !sent) {
      sendViewEvent(loc.name);
      setSent(true);
    } else {
      if (loc.location !== view) {
        navs.forEach((n) => {
          if (n.location === view) {
            setLoc(n);
            setSent(false);
          }
        });
      }
    }
  }, [view]);
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
