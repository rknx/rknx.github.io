//Run on Document Ready
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  /*//Populate values from json data
  fetch("blog.json")
    .then((response) => response.json())
    .then((data) => {
      //Intro section rendering
      if (typeof blFunc[data.intro["__blFunc"]] === "function")
        blFunc[data.intro["__blFunc"]](data.intro);

      //Timeline rendering
      Object.entries(data.timeline)
        .filter((entry) => entry.entries != "")
        .forEach(
          ([key, val]) =>
            typeof blFunc[val["__blFunc"]] === "function" &&
            val["__display"] &&
            blFunc[val["__blFunc"]](key, val)
        );

      //Navbar button rendering
      typeof blFunc[data.buttons["__blFunc"]] === "function" &&
        blFunc[data.buttons["__blFunc"]](data.buttons);

      //Quote rendering
      typeof blFunc[data.quote["__blFunc"]] === "function" &&
        blFunc[data.quote["__blFunc"]](data.quote);
    })
    .catch((error) => alert(`Error rendering data: ${error}`));*/
});

//Run on scroll of the page
window.onscroll = () => {
  let pageY = window.pageYOffset;
  dark = document.documentElement.classList.contains("dark") ? "d" : "";
  document.body.style.background = `url("../img/bg.svg#sp5v${dark}") -${
    pageY * 0.32
  }px 0/calc(16 / 9 * 100vh) 100vh repeat-x fixed, url("../img/bg.svg#sp4v${dark}") -${
    pageY * 0.24
  }px 0/calc(16 / 9 * 100vh) 100vh repeat-x fixed, url("../img/bg.svg#sp3v${dark}") -${
    pageY * 0.16
  }px 0/calc(16 / 9 * 100vh) 100vh repeat-x fixed, url("../img/bg.svg#sp2v${dark}") -${
    pageY * 0.08
  }px 0/calc(16 / 9 * 100vh) 100vh repeat-x fixed, url("../img/bg.svg#sp1v${dark}") 0 0/calc(1280 / 720 * 100vh) 100vh repeat-x fixed`;
};

//Run on Window Load
window.onload = () => {
  document.querySelector("#menu").addEventListener("change", (e) => {
    document.body.background.style.backgroundImage = ``;
  });

  //apply dark mode
  darkmode = (toggle) => {
    toggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    window.onscroll();
  };

  //theme toggle button
  document.querySelector("#theme").addEventListener("input", (e) => {
    document
      .querySelector("#theme")
      .setAttribute("value", document.querySelector("#theme").value);
    document.querySelector("#theme").value == 1
      ? darkmode(true)
      : darkmode(false);
  });

  //font toggle button
  document.querySelector("#fontsize").addEventListener("input", (e) => {
    font = `${16 + document.querySelector("#fontsize").value / 5}px`;
    document.documentElement.style.fontSize = font;
  });

  //initial theme toggle
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.querySelector("#theme").value = 1;
    document.querySelector("#theme").setAttribute("value", 1);
    darkmode(true);
  }
  /*
var blFunc = {
  initial: function (id, name, print) {
    document.querySelector(
      "nav"
    ).innerHTML += `<a href='#${id}'> <svg><use xlink:href='img/icons.svg#angle-right'></svg>${
      name.split(" ")[0]
    }</a>`;
    document.querySelector(
      "body"
    ).innerHTML += `<section class='timeline ${print}' id='${id}'>
        <div class='title'><div></div><div><h3>${name}</h3></div></div>
      </section>`;
  },

  individual: function ({ image, firstname, lastname, profession, bio, email }) {
    document.querySelector("body").innerHTML += `<section class='header'>
        <div class='avatar'><object data='${image}' type='image/png' alt='${firstname} ${lastname}'></object></div>
        <div class='bio'>
          <h1>${firstname} ${lastname}</h1>
          <h2>${profession}</h2>
          <p>${Object.values(bio).join(" ")} </p>
        </div>
        <h6 class='onlyPrint'>Email:${email}</h6>
      </section>`;
  },

  buttons: function ({ entries }) {
    for (const { url, icon, text, size } of Object.values(entries).filter(
      (entry) => entry.url != ""
    )) {
      document.querySelector(
        ".buttons"
      ).innerHTML += `<a role='button' aria-label='${text}' href='${url}' class='btn'>
          <svg><use xlink:href='/img/icons.svg#${icon}'></svg>
          <span>${text}</span>
        </a>`;
    }
  },*/
};
