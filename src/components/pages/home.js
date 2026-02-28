import {
  Container,
  Typography as Font,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import {
  cSharp,
  js,
  node,
  portrait,
  react,
  vue,
  wave,
  mongo,
} from "../../assets";
import { socials } from "../../utils/nav";
import { sendClickEvent } from "../../utils/ga";
function Home() {
  const stack = [js, cSharp, react, vue, node, mongo];
  return (
    <Container maxWidth="lg" component="article" className="HomeRoot" id="home">
      <Grid container minHeight="100vh">
        <Stack
          justifyContent="center"
          alignItems={"center"}
          className="Card"
          width={"100%"}
        >
          <Grid container className="Intro" justifyContent="center">
            <Grid className="Small-Portrait">
              <img className="Portrait" src={portrait.src} alt={portrait.alt} />
            </Grid>
            <Grid>
              <Font variant="h1" fontWeight="bold">
                FullStack Web Developer
              </Font>
              <Font>
                Hi there, I'm Jesus Morales Jr. 👋
                <br /> Let's create something amazing together!
                <br />
                📍Based in California, USA.🦅
              </Font>
            </Grid>
            <Grid className="Big-Portrait" minWidth={"auto"}>
              <img className="Portrait" src={portrait.src} alt={portrait.alt} />
            </Grid>
            <Grid className="Socials">
              <Grid container justifyContent="left">
                {socials.map((s) => (
                  <IconButton
                    key={s.link}
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    aria-label={s.alt}
                    onClick={() => sendClickEvent(s.name)}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Stack justifyContent="center" spacing={2}>
            <Font variant="h2" fontWeight="bold" align="center">
              Tech Stack
            </Font>
            <Grid
              container
              justifyContent="center"
              wrap="nowrap"
              className="Stack"
            >
              {stack.map((s) => (
                <Grid item key={s.src}>
                  <img src={s.src} alt={s.alt} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Grid>
      <img src={wave.src} alt={wave.alt} className="Wave" />
    </Container>
  );
}
export default Home;
