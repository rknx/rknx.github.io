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
      slugs = Array.from(data.blog, ({ attributes }) => attributes.id);
      ind = slugs.indexOf(window.location.hash.split("#")[1]);
      if (window.location.hash && ind > -1) {
        blFunc.blog(data.blog[ind], document.querySelector('main'));
        document.querySelector('details').setAttribute('open', '')
      } else {
        data.blog.forEach((val) => blFunc.blog(val, document.querySelector('main')));
      }
    })
    .catch((error) => console.log(`Error rendering data: ${error}`));
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

function clipBoard(text) {
  el = document.createElement('textarea');
  el.textContent = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  el.remove();
  alert('Share link has been copied to clipboard.')
}

var blFunc = {

  blog: function ({ tagName, attributes, children }, node) {

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
}
