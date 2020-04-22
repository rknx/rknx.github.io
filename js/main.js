//Run on Document Ready
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  //Populate values from json data
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      //Intro section rendering
      if (typeof tlFunc[data.intro["__tlFunc"]] === "function")
        tlFunc[data.intro["__tlFunc"]](data.intro);

      //Timeline rendering
      Object.entries(data.timeline).forEach(
        ([key, val]) =>
          typeof tlFunc[val["__tlFunc"]] === "function" &&
          val["__display"] &&
          tlFunc[val["__tlFunc"]](key, val)
      );

      //Navbar button rendering
      typeof tlFunc[data.buttons["__tlFunc"]] === "function" &&
        tlFunc[data.buttons["__tlFunc"]](data.buttons);

      //Quote rendering
      typeof tlFunc[data.quote["__tlFunc"]] === "function" &&
        tlFunc[data.quote["__tlFunc"]](data.quote);
    })
    .catch((error) => console.log(error));
});

//Run on Window Resize
window.resize = () => {
  //Changes to side-menu
  window.innerWidth >= 1280 &&
    document.querySelector("#menu").removeAttribute("checked");
  document.querySelector(".menu-open").style.display =
    window.innerWidth >= 1280 ? "none" : "";
  document.querySelector(".side-menu").style.clipPath =
    window.innerWidth >= 1280 ? "circle(150% at 0 0px)" : "";

  //Other to be added
};

//Run on scroll of the page
window.onscroll = () => {
  let pageY = window.pageYOffset;
  document.body.style.background = `var(--bggradient),url("img/bg.svg#sp5v") -${
    pageY * 0.32
  }px 0 repeat-x fixed, url("img/bg.svg#sp4v") -${
    pageY * 0.24
  }px 0 repeat-x fixed, url("img/bg.svg#sp3v") -${
    pageY * 0.16
  }px 0 repeat-x fixed, url("img/bg.svg#sp2v") -${
    pageY * 0.08
  }px 0 repeat-x fixed, url("img/bg.svg#sp1v") 0 0 repeat-x fixed`;
};

//Run on Window Load
window.onload = () => {
  //PWA Service worker
  "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");

  //Menu close on click
  document.querySelectorAll("nav a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#menu").checked = false; //set checked status to false
      el.blur(); //lost focus on clicked element
      document
        .querySelector(el.hash) //jest just the #...... part from link url
        .scrollIntoView({ block: "start", behavior: "smooth" }); //scroll to the #..... section
    });
  });

  //Page loader
  document.querySelector("#page-loader").style.opacity = 0;
  setTimeout(function () {
    document.querySelector("#page-loader").style.display = "none";
  }, 500);

  //apply dark mode
  darkmode = (toggle) => {
    toggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
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

  //theme toggle button
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

  //Fluent design
  document.querySelector(".side-menu").addEventListener("mousemove", (e) => {
    document.querySelectorAll(".side-menu a").forEach((el) => {
      x = e.clientX - el.offsetLeft;
      y =
        e.clientY -
        el.offsetTop +
        document.querySelector(".side-menu").scrollTop;
      console.log(el.scrollTop);
      el.style.borderImageSource = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(var(--rgbthemerev), var(--transb1)), rgba(var(--rgbthemerev), var(--transb0)))`;
    });
  });
  document.querySelector(".side-menu").addEventListener("mouseleave", (e) => {
    document.querySelectorAll(".side-menu a").forEach((el) => {
      el.style.borderImageSource = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(var(--rgbthemerev), var(--transb0)), rgba(var(--rgbthemerev), var(--transb0)))`;
    });
  });
  document.querySelectorAll(".side-menu a").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      x = e.clientX - el.offsetLeft;
      y =
        e.clientY -
        el.offsetTop +
        document.querySelector(".side-menu").scrollTop;
      el.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(var(--rgblight), var(--transf1)), rgba(var(--rgbthemerev), var(--transf0)))`;
    });
    el.addEventListener("mouseleave", (e) => {
      el.style.background = `rgba(var(--rgbthemerev), var(--transf0))`;
    });
  });
};
