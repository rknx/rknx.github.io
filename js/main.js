//Strict Mode
(function ($) {
  "use strict";

  //Run on Document Ready
  $(document).ready(function () {
    //Populate values from json data
    $.getJSON("data.json", function (data) {
      $(".strName").html(
        `${data.intro.firstname} <span>${data.intro.lastname}</span>`
      );
      $(".strJob").html(data.intro.profession);

      for (const val of Object.values(data.buttons)) {
      }
      if (typeof tlFunc[data.intro["func"]] === "function")
        tlFunc[data.intro["func"]](data.intro);
      for (const [key, val] of Object.entries(data.timeline))
        if (
          val["display"] !== false &&
          typeof tlFunc[val["func"]] === "function"
        )
          tlFunc[val["func"]](key, val);
      if (typeof tlFunc[data.buttons["func"]] === "function")
        tlFunc[data.buttons["func"]](data.buttons);
      if (typeof tlFunc[data.quote["func"]] === "function")
        tlFunc[data.quote["func"]](data.quote);
    });
  });

  //Run on Window Resize
  $(window).on("resize", function () {
    //Changes to side-menu
    if (window.innerWidth >= 1280) $("#menu").prop("checked", false);
    $(".menu-open").css({ display: window.innerWidth >= 1280 ? "none" : "" });
    $(".side-menu").css({
      "clip-path": window.innerWidth >= 1280 ? "circle(150% at 0 0px)" : "",
    });

    //Other to be added
  });

  //Run on Window Load
  $(window).on("load", function () {
    //Page loader
    $("#page-loader").fadeOut(500, function () {});

    //PWA Service worker
    if ("serviceWorker" in navigator)
      navigator.serviceWorker.register("/sw.js");

    //Menu close on click
    $("nav").click(function () {
      $("#menu").prop("checked", false);
      setTimeout(function () {
        history.replaceState(
          {},
          document.title,
          window.location.href.split("#")[0]
        );
      }, 50);
    });
  });
})(jQuery);
