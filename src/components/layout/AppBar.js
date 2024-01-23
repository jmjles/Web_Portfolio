import { Grid, Typography as Font, IconButton } from "@mui/material";
import { socials } from "../../utils/nav";
import { MenuOpenRounded, MenuRounded } from "@mui/icons-material";

export default (props) => {
  const [open, toggleOpen] = props.open;
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      wrap="nowrap"
      className={open ? "Nav Open" : "Nav"}
    >
      <Grid item>
        <Font fontWeight="bold" variant="h2" component="p" noWrap>
          Jesus M |
        </Font>
      </Grid>
      <Grid item container className="Socials" wrap="nowrap">
        {socials.map((s) => (
          <Grid item>
            <IconButton
              key={s.link}
              href={s.link}
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label={s.alt}
            >
              {s.icon}
            </IconButton>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <IconButton onClick={toggleOpen} className="MenuContainer">
          <MenuOpenRounded
            htmlColor="black"
            className={open ? "MenuOpen" : "MenuOpen Closed"}
          />
          <MenuRounded
            htmlColor="black"
            className={open ? "Menu Open" : "Menu"}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
