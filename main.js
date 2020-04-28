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
      Object.entries(data.timeline)
        .forEach(
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
    .catch((error) => alert(`Error rendering data: ${error}`));
});

//Run on Window Resize
window.onresize = () => {
  //Changes to side-menu
  if (window.innerWidth >= 1280)
    document.querySelector("#menu").checked = false;
  //Other to be added
};

//Run on scroll of the page
window.onscroll = () => {
  //dark = document.documentElement.classList.contains("dark") ? "d" : "";
  //Controll background parallax scroll
  document.body.style.setProperty('--page-scroll', window.pageYOffset);
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
      try {
        document
          .querySelector(el.hash) //just just the #...... part from link url
          .scrollIntoView({ block: "start", behavior: "smooth" }); //scroll to the #..... section
      } catch (error) {
        //fallback for iphone safari
        document.querySelector(el.hash).scrollIntoView(true);
      }
    });
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
      el.style.borderImageSource = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(var(--rgbthemerev), var(--fluentborderhover)), rgba(var(--rgbthemerev), var(--fluentborder)))`;
    });
  });
  document.querySelector(".side-menu").addEventListener("mouseleave", (e) => {
    document.querySelectorAll(".side-menu a").forEach((el) => {
      el.style.borderImageSource = `none`;
    });
  });
  document.querySelectorAll(".side-menu a").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      x = e.clientX - el.offsetLeft;
      y =
        e.clientY -
        el.offsetTop +
        document.querySelector(".side-menu").scrollTop;
      el.style.background = `radial-gradient(circle 100px at ${x}px ${y}px, rgba(var(--rgblight), var(--fluentbackhover)), rgba(var(--rgbthemerev), var(--fluentback)))`;
    });
    el.addEventListener("mouseleave", (e) => {
      el.style.background = `rgba(var(--rgbthemerev), var(--fluentback))`;
    });
  });
};

var tlFunc = {
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

  tlImage(logo) {
    return `<div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>`;
  },

  intro: function ({ image, firstname, lastname, profession, bio, email }) {
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
  },

  education: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const {
      degree,
      date,
      completed,
      institution,
      department,
    } of Object.values(entries).filter((entry) => entry.degree != "")) {
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div>
            <h4>${degree} <span> ${date} ${
        completed == false ? "(expected)" : ""
        }</span></h4>
            <h5>${[institution, department].filter(Boolean).join(", ")}</h5>
          </div>
        </div>`;
    }
  },

  awards: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { award, date, institution, department } of Object.values(
      entries
    ).filter((entry) => entry.award != "")) {
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div>
            <h4>${award}<span>${date}</span></h4>
            <h5>${[institution, department].filter(Boolean).join(", ")}</h5>
          </div>
        </div>`;
    }
  },

  skills: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { prettyName, list } of Object.values(entries).filter(
      (entry) => entry.prettyName != ""
    )) {
      var htmltext = "";
      for (const { icon, text } of Object.values(list).filter(
        (entry) => entry.text != ""
      ))
        htmltext += `<span>${
          icon != ""
            ? `<svg><use xlink:href='/img/skills.svg#${icon}'/></svg>`
            : ""
          } ${text}</span>`;
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div>
            <h4>${prettyName}</h4>
            <div class='skills'>${htmltext}</div>
          </div>
        </div>`;
    }
  },

  research: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const {
      position,
      start,
      end,
      institution,
      department,
      projects,
    } of Object.values(entries).filter((entry) => entry.position != "")) {
      var htmltext = "";
      for (const list of Object.values(projects).filter(
        (entry) => entry.list != ""
      ))
        htmltext += `<p class='bull-ind'>${list}</p>`;
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div>
            <h4>${position} <span>${start} – ${end} </span></h4>
            <h5>${[institution, department]
          .filter(Boolean)
          .join(", ")}</h5> ${htmltext}
          </div>
        </div>`;
    }
  },

  teaching: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { list, organization } of Object.values(entries).filter(
      (entry) => entry.organization != ""
    )) {
      var htmltext = "";
      for (const { position, title, course, date } of Object.values(
        list
      ).filter((entry) => entry.position != ""))
        htmltext += `<h5>${position} ${
          title != "" ? `(${title}) in` : "for"
          } ${course}<span>${date}</span></h5>`;
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${organization}</h4>${htmltext}</div></div>`;
    }
  },

  affiliations: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { organization, position } of Object.values(entries).filter(
      (entry) => entry.organization != ""
    )) {
      var htmltext = "";
      for (const { role, start, end } of Object.values(position).filter(
        (entry) => entry.role != ""
      ))
        htmltext += `<h5>${role}<span>${[start, end]
          .filter(Boolean)
          .join(" – ")}</span></h5>`;
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${organization}</h4>${htmltext}</div></div>`;
    }
  },

  projects: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { title, image, text } of Object.values(entries).filter(
      (entry) => entry.title != ""
    )) {
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${title}</h4><div>${
        image && `<img src='${image}' alt='' onerror='this.style.display=none'>`
        }<p>${text}</p></div></div></div>`;
    }
  },

  publications: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { prettyName, list } of Object.values(entries).filter(
      (entry) => entry.list != ""
    )) {
      var htmltext = "";
      for (const { prettyName, items } of Object.values(list).filter(
        (entry) => entry.items != ""
      )) {
        var htmltext1 = "";
        for (const { url, citationhtml } of Object.values(items).filter(
          (entry) => entry.citationhtml != ""
        ))
          htmltext1 += `<p class='bull-ind'><a href='${url}'>${citationhtml}</a></p>`;
        htmltext += `<h5 class='noprint'>${prettyName}</h5>${htmltext1}`;
      }
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${prettyName}</h4>${htmltext}</div></div>`;
    }
  },

  presentation: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { conference, date, titlehtml } of Object.values(entries).filter(
      (entry) => entry.title != ""
    ))
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${conference}<span>${date}</span></h4><h5>${titlehtml}</h5></div></div>`;
  },

  posters: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
  },

  references: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const {
      name,
      email,
      position,
      institution,
      department,
    } of Object.values(entries).filter((entry) => entry.name != "")) {
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div>
            <h4>${name}<span><small>${email}</small></span></h4>
            <h5>${[position, department, institution]
          .filter(Boolean)
          .join(", ")}</h5>
          </div>
        </div>`;
    }
  },

  contact: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const [ind, { prettyName, list }] of Object.entries(entries)) {
      var htmltext = "";
      for (const { prettyName, content, icon, link } of Object.values(
        list
      ).filter((entry) => entry.content != "")) {
        htmltext += `
          <h5 class='${ind}'> ${prettyName != "" ? prettyName + ":" : ""}
            <click tabindex='0'></click>
            <a ${link != "" ? "href='" + link + "'" : ""}>${content}
              ${
          icon != ""
            ? `<svg><use xlink:href='/img/icons.svg#${icon}'/></svg>`
            : ""
          }
            </a>
          </h5>`;
      }
      document.querySelector(`#${key}`).innerHTML += `<div>${this.tlImage(
        logo
      )}<div><h4>${prettyName}</h4>${htmltext}</div></div></div>`;
    }
  },

  quote: function ({ noPrint, logo, text, speaker }) {
    document.querySelector("body").innerHTML += `
      <div id='quote' class='${noPrint}'>
        <svg><use xlink:href='/img/icons.svg#${logo}'></use></svg>
        <p>${text}</p><span>${speaker}</span>
      </div>`;
  },
};
