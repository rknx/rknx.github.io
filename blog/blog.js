//Run on Document Ready
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  //Populate values from json data
  fetch("blog.json")
    .then((response) => response.json())
    .then((data) => {

      //Blog content rendering
      data.blog
        .forEach(
          (val) =>
            blFunc.blog(val, document.querySelector('section'))
        );

      /*//Navbar button rendering
      typeof blFunc[data.buttons["__blFunc"]] === "function" &&
        blFunc[data.buttons["__blFunc"]](data.buttons);

      //Quote rendering
      typeof blFunc[data.quote["__blFunc"]] === "function" &&
        blFunc[data.quote["__blFunc"]](data.quote);*/
    })
  //.catch((error) => console.log(`Error rendering data: ${error}`));
});

//Run on scroll of the page
window.onscroll = () => {
  //Controll background parallax scroll
  document.body.style.setProperty('--page-scroll', window.pageYOffset);
};

//Run on Window Load
window.onload = () => {
  document.querySelector("#menu").addEventListener("change", (e) => { });

  //apply dark mode
  darkmode = (toggle) => {
    toggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    window.onscroll();
  };

  document.querySelectorAll('details').forEach(el => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('details').forEach(el2 => {
        if (el2 !== el) el2.removeAttribute('open');
      })
    })
  })

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
}

var blFunc = {

  blog: function ({ tagName, attributes, children }, node) {

    console.log(tagName);
    console.log(attributes);
    console.log(children);

    var el = document.createElement(tagName);

    Object.entries(attributes)
      .forEach(
        ([key, val]) =>
          el.setAttribute(key, val)
      );

    if (Array.isArray(children)) {
      Object.values(children).forEach(val => {
        if (typeof (val) == "string") {
          el.innerHTML += val
        } else {
          this.blog(val, el)
        }
      })
    }
    else {
      el.innerHTML += children;
    }
    node.appendChild(el);

  }
  /*
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
}
