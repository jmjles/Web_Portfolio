import anime from "animejs/lib/anime";
const socialAni = () => {
  const el = document.querySelector(".Socials");
  const initHeight = anime.get(el, "height", "px");
  const height = initHeight > "0px" ? [initHeight, 0] : [0, "50px"];
  anime({
    targets: ".Socials",
    height,
    easing: "linear",
    duration: 200
  });
};

const homeAni = delay => {
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
    duration: 1000,
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
};
const sidebarAni = () => {
  const el = document.querySelector(".SidebarRoot");
  const init = anime.get(el, "width", "px");
  const width = init > 0 ? [init, 0] : [0, "25%"];
  anime({
    targets: ".SidebarRoot",
    width,
    easing: "linear",
    duration: 200
  });
};

const showResp = (id) =>{
  const target = `#ul${id}`;
  const el = document.querySelector(target)
  const init = anime.get(el, "height", "px");
  const height = init > '0px' ? [init, '0px'] : ['0px', "80px"];
  anime({
    targets: target,
    height,
    easing: "linear",
    duration: 400
  })
}
export { socialAni, homeAni, sidebarAni, showResp };
