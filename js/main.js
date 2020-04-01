//Strict Mode 
(function($) {
  "use strict";

//Run on Document Ready
$(document).ready(function(){
  
  //Background Height fix for vertical progress on window resize
  $(window).resize(function(){
    if (window.innerWidth>=1280) $("#menu").prop("checked", false);
    $(".menu-open").css({"display":(window.innerWidth>=1280)?'none':'flex'});
    $('.side-menu').css({"clip-path":(window.innerWidth>=1280)?'circle(75%)':'circle(5em at 0 0px);'});
  });

  //Populate values from json data
  $.getJSON("data.json", function(data){

    $('.strName').html(data.intro.firstname+" <span>"+data.intro.lastname+"</span>");
    $('.introName').html(data.intro.firstname+" <span>"+data.intro.lastname+"</span>");
    $('.strJob').html(data.intro.profession);
    $('.bio').append("<p>"+ Object.values(data.intro.introstate).join(" ")+"</p>");
    $('.quote').append("<p>"+ data.quote.text +"</p> <span>"+ data.quote.speaker +"</p>");
    for (const val of Object.values(data.theme.buttons)){$('.buttons').append("<a href='"+val.url+"' class='btn'><svg><use xlink:href='/img/icons.svg#"+val.icon+"'></svg><span>"+val.text+"</span></a>")};

    for (const val of Object.keys(data.timeline)){
      $('.side-menu-nav').append("<li class='"+ data["timeline"][val]["display"] +"'><a href='#"+val+"'> <svg><use xlink:href='/img/icons.svg#angle-right'></svg> "+data["timeline"][val]["prettyName"].split(/\s/)[0]+"</a></li>");
      $('#thank-you').before("<section class='timeline "+ data["timeline"][val]["noPrint"] +" "+ data["timeline"][val]["display"] +"' id='"+val+"'> </section>");
      tlFunc.list(val, data["timeline"][val]);
    };
  });

});

//Run on Window Load
$(window).load(function(){

    //Page loader
    $('#page-loader').fadeOut(500, function(){});

});

})(jQuery);

