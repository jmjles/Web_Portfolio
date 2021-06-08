import anime from "animejs/lib/anime";

const sidebarAni = () => {
  const el = document.querySelector(".SidebarRoot");
  const init = anime.get(el, "width", "px");
  const width = init > 0 ? [init, 0] : [0, "100%"];
  anime({
    targets: ".SidebarRoot",
    width,
    easing: "linear",
    duration: 200
  });
};
export { sidebarAni };
