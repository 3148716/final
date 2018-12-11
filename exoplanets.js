//infinite vertical scroll
// $('document').ready(function() {
//              $(document).scroll(function(){
//              if(document.documentElement.clientHeight + 
//              $(document).scrollTop() >= document.body.offsetHeight)$(document).scrollTop(0);
//              });
//           }); 


//start at top on refresh
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});




//space objects scroll interactivity
$(document).scroll(function(){
    r = $(document).scrollTop()/2;
    s = $(document).scrollTop();



	$("#earth").css({
    	"bottom":0-s
    })

    if ($(document).scrollTop() > 500) {
    	$("#earth").fadeOut(200);
    } else {
    	$("#earth").fadeIn(200);
    }



    $("#station").css({
        "width":r,
        "height":r
    })

    if ($(document).scrollTop() > 3000) {
    	$("#station").fadeOut(200);
    } else {
    	$("#station").fadeIn(200);
    }

    


    $("#moon").css({
        "width":r-1750,
        "height":r-1750
    })

    if ($(document).scrollTop() > 7000) {
    	$("#moon").fadeOut(200);
    } else {
    	$("#moon").fadeIn(200);
    }



    $("#mars").css({
        "width":r-3750,
        "height":r-3750
    })

    if ($(document).scrollTop() > 9500) {
    	$("#mars").fadeOut(200);
    } else {
    	$("#mars").fadeIn(200);
    }



    $("#jupiter").css({
        "width":r-6000,
        "height":r-6000
    })

    if ($(document).scrollTop() > 16000) {
    	$("#jupiter").fadeOut(200);
    } else {
    	$("#jupiter").fadeIn(200);
    }



    $("#saturn").css({
        "width":r-8000,
        "height":r-8000
    })

    if ($(document).scrollTop() > 20000) {
    	$("#saturn").fadeOut(200);
    } else {
    	$("#saturn").fadeIn(200);
    }


    $("#uranus").css({
        "width":r-10000,
        "height":r-10000
    })

    if ($(document).scrollTop() > 23000) {
    	$("#uranus").fadeOut(200);
    } else {
    	$("#uranus").fadeIn(200);
    }


    $("#neptune").css({
        "width":r-12000,
        "height":r-12000
    })

    if ($(document).scrollTop() > 26000) {
    	$("#neptune").fadeOut(200);
    } else {
    	$("#neptune").fadeIn(200);
    }



    $("#andromeda").css({
        "width":r-15000,
        "height":r-15000
    })

    if ($(document).scrollTop() > 35000) {
    	$("#andromeda").fadeOut(0);
    } else {
    	$("#andromeda").fadeIn(200);
    }



//background
	$("#space").css({
        "width":window.innerHeight*2+(s*0.005),
        "height":window.innerHeight+(s*0.0025)
    })




//Return to Earth function buttons

//button to return to top (Earth) fade in
    $(".home").css({
        "width":s-32353,
        "height":s-32953
    })

    if ($(document).scrollTop() > 33052) {
    	$(".home").fadeIn(0);
    } else {
    	$(".home").fadeOut(200);
    }

});

//button to return to top (Earth) function
$(".home").click(function() {
  $("html, body").delay(1000).animate({ scrollTop: 0 }, 7000);
  return false;
});







//console.log scrollTop value
$(document).scroll(function() {
    console.log($(document).scrollTop());
});







//Operation mode button functions


//button to automatically scroll to the end (Andromeda)
$("#auto").click(function() {
  $("html, body").delay(2000).animate({ scrollTop: $(document).height() }, 15000);
  return false;
});

//automatic system message pop-up
$("#auto").click(function(){
    $("#activate").fadeIn(1000).delay(2000).fadeOut(500);
});

//hide auto button on click for navigation
$("#auto").click(function(){
    $(".start").hide();
});



//manual system message pop-up
$("#manual").click(function(){
    $("#nav").fadeIn(1000).delay(2000).fadeOut(500);
});

//hide manual button on click for navigation
$("#manual").click(function(){
    $(".start").hide();
});







$(document).ready(function() {
    $("#spaceship").get(0).play();
});

$(document).ready(function() {
    $("#bedroom").get(0).play();
});