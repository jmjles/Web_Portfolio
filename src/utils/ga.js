import ReactGa from "react-ga4";

export const sendViewEvent = (e) =>
  ReactGa.event({ category: "view", action: "scroll", value: e });

  export const sendClickEvent = (c) =>
  ReactGa.event({ category: "click", action: "clicked", value: c });