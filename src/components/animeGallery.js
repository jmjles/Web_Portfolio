import anime from "animejs/lib/anime";
const socialAni = reverse => {
  if (reverse === false) {
    anime({
      targets: ".Socials",
      height: [0, 50],
      easing: "linear",
      duration: 300
    });
  } else {
    anime({
      targets: ".Socials",
      height: [50, 0],
      duration: 200,
      easing: "linear"
    });
  }
};
export { socialAni };
