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

const homeAni = (delay) => {
      anime({
        targets: "#lines #path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        delay: 1000,
        duration: 2000
      });
      anime({
        targets: "#lines #path",
        strokeWidth: [2, 5],
        easing: "linear",
        delay,
        duration:1000,
        loop: true,
        direction: "alternate"
      });
      anime({
        targets: "#lines #path",
        stroke: ["#000", "#598288"],
        easing: "linear",
        delay,
        duration: 1000,
        loop: true,
        direction: "alternate"
      });
}
export { socialAni, homeAni };
