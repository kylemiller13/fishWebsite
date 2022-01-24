$(document).ready(function() {
  $("button#light-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });
  $("button#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $("#info1").click(function(){
    $("p").removeClass();
    $("#info1").addClass("highlight");
  });

  $("#info2").click(function(){
    $("p").removeClass();
    $("#info2").addClass("highlight");
  });

  $("#info3").click(function(){
    $("p").removeClass();
    $("#info3").addClass("highlight");
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#fish").prepend("<li>glub...</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#fish").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#scare").click(function(){
    $("button#scare").after('<img src="img/scared-fish.jpg">');
    $("#fish-convo").children("img").first().click(function(){
      $(this).remove();
    });
  });


});