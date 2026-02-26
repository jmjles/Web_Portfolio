import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fadeIn, fadeOut } from "../utils";

const Image = ({ images, alt, id }) => {
  const slideshow = Array.isArray(images);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const className = `img${id}`;

  const handleFade = async (name) => {
    const c = next >= images.length - 1 ? 0 : next + 1;
    await fadeOut(name);
    setCurrent(c);
    await fadeIn(name);
    setNext(c >= images.length - 1 ? 0 : c + 1);
  };

  useEffect(() => {
    if (!slideshow) return;
    const name = `.${className}`;
    handleFade(name);
  }, [next]);

  if (!slideshow) return <img src={images} alt={alt} />;

  return (
    <Box position={"relative"} height={180} sx={{ aspectRatio: "16/9" }}>
      <Box
        bgcolor={"#e8f4ff"}
        sx={{
          zIndex: 2,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          height: "100%",
          width: "100%",
          maxHeight: 180,
        }}
        className={className}
      >
        <img src={images[current]} style={{ height: "100%" }} />
      </Box>

      <Box>
        <img src={images[next]} style={{ height: "100%", maxHeight: 180 }} />
      </Box>
    </Box>
  );
};

export default Image;
