// // import jQuery
// let script = document.createElement("script");
// script.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
// script.type = "text/javacript";
// document.getElementsByTagName("head")[0].appendChild(script);
// // end of import

// Initialize
let guiControls = function () {
  this.background = "#c8c8c8";
};
let controls = new guiControls();

$(document).ready(() => {
  $("*").css("margin", "0");
  $("body").css({
    background: controls.background,
    width: "100vw",
    height: "100vh",
  });
  let gui = new dat.GUI();
  gui.addColor(controls, "background");
});

//render
let render = function () {
  $("body").css("background", controls.background);
};

let renderer = window.setInterval(() => render(), 1000 / 60);
renderer;
