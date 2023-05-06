$(document).ready(function(){
    $("#contact-btn").click(function(){


        $("#home").removeClass("navactive");
        $("#hero-text").removeClass("navactive");
        $("#about").removeClass("navactive");
        $("#services").removeClass("navactive");
        $("#work").removeClass("navactive");
        $("#link-contact-me").addClass("navactive");

        $("#hero-text").fadeOut();
        $("#about-cont").fadeOut();
        $("#services-cont").fadeOut();
        $("#work-cnt").fadeOut();
        $("#contact-box").fadeIn();
    });
    $("#link-contact-me").click(function(){
         
        $("#hero-text").removeClass("navactive");
        $("#about").removeClass("navactive");
        $("#services").removeClass("navactive");
        $("#work").removeClass("navactive");
        $("#link-contact-me").addClass("navactive");

        $("#hero-text").fadeOut();
        $("#about-cont").fadeOut();
        $("#services-cont").fadeOut();
        $("#work-cnt").fadeOut();
        $("#contact-box").fadeIn();
    });
    $("#home").click(function(){
         
        $("#link-contact-me").removeClass("navactive");
        $("#about").removeClass("navactive");
        $("#services").removeClass("navactive");
        $("#work").removeClass("navactive");
        $("#home").addClass("navactive");

        $("#contact-box").fadeOut();
        $("#about-cont").fadeOut();
        $("#services-cont").fadeOut();
        $("#work-cnt").fadeOut();
        $("#hero-text").fadeIn();
    });
    $("#about").click(function(){
         
        $("#link-contact-me").removeClass("navactive");
        $("#home").removeClass("navactive");
        $("#services").removeClass("navactive");
        $("#work").removeClass("navactive");
        $("#about").addClass("navactive");
        

        $("#hero-text").fadeOut();
        $("#contact-box").fadeOut();
        $("#services-cont").fadeOut();
        $("#work-cnt").fadeOut();
        $("#about-cont").fadeIn();
    });
    $("#services").click(function(){

        $("#link-contact-me").removeClass("navactive");
        $("#home").removeClass("navactive");
        $("#about").removeClass("navactive");
        $("#work").removeClass("navactive");
        $("#services").addClass("navactive");

        $("#hero-text").fadeOut();
        $("#contact-box").fadeOut();
        $("#about-cont").fadeOut();
        $("#work-cnt").fadeOut();
        $("#services-cont").fadeIn();
    });
    $("#work").click(function(){

        $("#link-contact-me").removeClass("navactive");
        $("#home").removeClass("navactive");
        $("#about").removeClass("navactive");
        $("#services").removeClass("navactive");
        $("#work").addClass("navactive");

        $("#hero-text").fadeOut();
        $("#contact-box").fadeOut();
        $("#about-cont").fadeOut();
        $("#services-cont").fadeOut();
        $("#work-cnt").fadeIn();
    });
});