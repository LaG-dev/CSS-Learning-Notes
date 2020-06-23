// Initialize
//dat.gui
let guiControls = function () {
  this.BodyColor = "#c8c8c8";
  this.DivColor = "#080808";
  this.TextColor = "#fefefe";
};
let controls = new guiControls();

//css
$(document).ready(() => {
  //*
  $("*").css("margin", "0");
  //body
  $("body").css({
    background: controls.BodyColor,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  });

  //div#a
  $("body").append(" <div></div> ");
  $("div").attr({ id: "a" });
  $("div#a").css({
    margin: "calc(50vh - 50px) calc(50vw - 50px)",
    "line-height": "100px",
    width: "100px",
    height: "100px",
    background: controls.DivColor,
  });

  //p#text
  $("div#a").append(" <p>Text</p> ");
  $("p").attr({ id: "text" });
  $("#text").css({
    "font-size": "1.5em",
    color: controls.TextColor,
    "text-align": "center",
  });
  //end of css

  //dat.gui
  let gui = new dat.GUI();
  gui.addColor(controls, "BodyColor");
  gui.addColor(controls, "DivColor");
  gui.addColor(controls, "TextColor");
});

//render
let render = function () {
  $("body").css("background", controls.BodyColor);
  $("div#a").css("background", controls.DivColor);
  $("#text").css("color", controls.TextColor);
};

let renderer = window.setInterval(() => render(), 1000 / 60);
renderer;
