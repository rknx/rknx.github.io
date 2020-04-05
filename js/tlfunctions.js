var tlFunc = {
  initial: function (id, name, print) {
    $("nav").append(
      `<a href='#${id}'> <svg><use xlink:href='/img/icons.svg#angle-right'></svg>${
        name.split(" ")[0]
      }</a>`
    );
    $("body").append(`<section class='timeline ${print}' id='${id}'>
      <div class='title'><div><div></div></div><h3 class='tl-title'>${name}</h3></div>
      </section>`);
  },

  intro: function ({ image, firstname, lastname, profession, bio, email }) {
    $("body").append(
      `<section class='header'>
        <div class='avatar'><object data='${image}' type='image/png' alt='${firstname} ${lastname}'>${firstname} ${lastname}</object></div>
        <div class='bio'>
          <h1>${firstname} ${lastname}</h1>
          <h2>${profession}</h2>
          <p>${Object.values(bio).join()} </p>
        </div>
        <h6 class='onlyPrint'>Email:${email}</h6>
      </section>`
    );
  },

  buttons: function ({ entries }) {
    for (const { url, icon, text } of Object.values(entries)) {
      $(".buttons").append(
        `<a role='button' aria-label='${text}' href='${url}' class='btn'>
          <svg><use xlink:href='/img/icons.svg#${icon}'></svg>
          <span>${text}</span>
        </a>`
      );
    }
    $(".side-menu").append(
      `<div class='hosts'>
        <a href='https://www.netlify.com'><svg><use xlink:href='/img/icons.svg#netlify'></svg>Deploys by Netlify</a>
        <a href='https://www.github.com'><svg><use xlink:href='/img/icons.svg#github'></svg>Hosted on Github</a>
      </div>`
    );
  },

  education: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const {
      degree,
      date,
      completed,
      institution,
      subinstitution,
    } of Object.values(entries)) {
      $(`#${key}`).append(
        `<div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${degree} <span> ${date} ${
          completed == false ? "(expected)" : ""
        }</span></h4>
            <h5 class='entry-description'>${institution}, ${subinstitution}</h5>
          </div>
        </div>`
      );
    }
  },

  awards: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { award, date, institution, subinstitution } of Object.values(
      entries
    )) {
      $(`#${key}`).append(
        `<div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${award}<span>${date}</span></h4>
            <h5 class='entry-description'>${institution}, ${subinstitution}</h5>
          </div>
        </div>`
      );
    }
  },

  skills: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { prettyName, list } of Object.values(entries)) {
      var htmltext = "";
      for (const { icon, text } of Object.values(list))
        htmltext += `<span><img src='${icon}' alt='' onerror='this.style.display="none"'>${text}</span>`;
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${prettyName}</h4>
            <div class='skills'>${htmltext}</div>
          </div>
        </div>`);
    }
  },

  research: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const {
      position,
      start,
      end,
      institution,
      subinstitution,
      projects,
    } of Object.values(entries)) {
      var htmltext = "";
      for (const list of Object.values(projects))
        htmltext += `<p class='bull-ind'>${list}</p>`;
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${position} <span>${start} – ${end} </span></h4>
            <h5>${institution}, ${subinstitution} </h5> ${htmltext}
          </div>
        </div>`);
    }
  },

  teaching: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { list, organization } of Object.values(entries)) {
      var htmltext = "";
      for (const { position, title, course, date } of Object.values(list))
        htmltext += `<h5>${position} ${
          title != "" ? "(" + title + ") in" : "for"
        } ${course}<span>${date}</span></h5>`;
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div><h4>${organization}</h4>${htmltext}</div>
        </div>`);
    }
  },

  affiliations: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { organization, position } of Object.values(entries)) {
      var htmltext = "";
      for (const { role, start, end } of Object.values(position))
        htmltext += `<h5>${role}<span>${start} – ${end}</span></h5>`;
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div><h4>${organization}</h4>${htmltext}</div>
        </div>`);
    }
  },

  projects: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { title, image, text } of Object.values(entries)) {
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div><h4>${title}</h4><div><img src='${image}' alt='' onerror='this.style.display=none'><p>${text}</p></div></div>
        </div>`);
    }
  },

  publications: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { prettyName, list } of Object.values(entries)) {
      var htmltext = "";
      for (const { prettyName, items } of Object.values(list)) {
        var htmltext1 = "";
        for (const { url, citationhtml } of Object.values(items))
          htmltext1 += `<p class='bull-ind'><a href='${url}'>${citationhtml}</a></p>`;
        htmltext += `<h5 class='noprint'>${prettyName}</h5>${htmltext1}`;
      }
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div><h4>${prettyName}</h4>${htmltext}</div>
        </div>`);
    }
  },

  presentation: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { conference, date, titlehtml } of Object.values(entries)) {
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${conference}<span>${date}</span></h4>
            <h5 class='entry-description'>${titlehtml}</h5>
          </div>
        </div>`);
    }
  },

  posters: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
  },

  references: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const { name, email, position, institution } of Object.values(
      entries
    )) {
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div>
            <h4>${name}<span><small>${email}</small></span></h4>
            <h5 class='entry-description'>${position}, ${institution}</h5>
          </div>
        </div>`);
    }
  },

  contact: function (key, { prettyName, logo, noPrint, entries }) {
    this.initial(key, prettyName, noPrint);
    for (const [ind, { prettyName, list }] of Object.entries(entries)) {
      var htmltext = "";
      for (const { prettyName, content, icon, link } of Object.values(list)) {
        htmltext += `
          <h5 class='${ind}'> ${prettyName != "" ? prettyName + ":" : ""}
            <click tabindex='0'></click><a href='${link}'>
            ${content != "" ? content + "&nbsp;" : ""}
            ${
              icon != ""
                ? "<svg><use xlink:href='/img/icons.svg#" + icon + "'/></svg>"
                : ""
            }
            </a>
          </h5>`;
      }
      $(`#${key}`).append(`
        <div>
          <div><div><svg><use xlink:href='/img/icons.svg#${logo}'/></svg></div></div>
          <div><h4>${prettyName}</h4>${htmltext}</div></div>
        </div>`);
    }
  },

  quote: function ({ noPrint, logo, text, speaker }) {
    $("body").append(`
      <div id='quote' class='${noPrint}'>
        <svg><use xlink:href='/img/icons.svg#${logo}'></use></svg>
        <p>${text}</p><span>${speaker}</span>
      </div>`);
  },
};
