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
      //Strings replace
      document.querySelectorAll(".strName").forEach((el) => {
        el.innerHTML = `${data.intro.firstname} <span>${data.intro.lastname}</span>`;
      });
      document.querySelectorAll(".strJob").forEach((el) => {
        el.innerHTML = data.intro.profession;
      });
      document.querySelectorAll(".strEmail").forEach((el) => {
        el.innerHTML = data.intro.email;
      });

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
};
