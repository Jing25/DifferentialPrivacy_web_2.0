var queryL = $("#btnQueryL");
var queryR = $("#btnQueryR")
var hlL = $("#H_lineL");
var hlR = $("#H_lineR");
var vlL = $("#V_lineL");
var vlR = $("#V_lineR");
var hiv1L = $(".HIV1L");
var hiv1R = $(".HIV1R");
var hiv2L = $(".HIV2L");
var hiv2R = $(".HIV2R");
var hiv3L = $(".HIV3L");
var hiv3R = $(".HIV3R");
var answerL = $("#answerL");
var answerR = $("#answerR");
var anim = $("#btnAnimation");

$(document).ready(function() {

  $("#btnChapter1_1").click(function() {
    $(".chapter1_2").slideDown(300);
  });
  $("#btnChapter1_1").click(function() {
    $("#btnChapter1_1").slideUp(300);
  })

})

$('#btndel').click(function(){
  $(".HIV1R").remove();
  $(".vlineR").animate({height:"120px"}).queue(function(){
    $(".neighboringDS").show(300);
    $("#btndel").hide(300);
    xR = 2;
  })
})

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function currentDiv_complete(n) {
  var bars = document.getElementsByClassName("navbar");
  $(bars[n-1]).addClass("is-done");
  showDivs(slideIndex = n+1);
}

function complete() {
  var bars = document.getElementsByClassName("navbar");
  bars[n].addClass("is-done");
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("chapter");
  var dots = document.getElementsByClassName("navbar");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" current", "");
   }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " current";


  //dots[slideIndex-1].className.replace("w3-grey", "w3-black")
}

function next(n) {
  var btn = document.getElementsByClassName("btn_next");
  var next = document.getElementsByClassName("next");
  $(next[n-1]).fadeIn(300)
  $(btn[n-1]).hide(300)
}


anim.click(function(){

var def = anim.data('default'),
    alt = anim.data('alt');
    (anim.val() == def) ? anim.val(alt) : anim.val(def)

function loop() {

  if(anim.val() == alt) {
    queryR.addClass("w3-green");
    queryL.addClass("w3-green").delay(200).queue(function(next){
      queryR.removeClass("w3-green");
      queryL.removeClass('w3-green').queue(function(next){
        hlR.animate({width: "100%"}, "slow");
        hlL.animate({width: "100%"}, "slow").queue(function(next){
          hiv1L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
          hiv1R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
            hiv2L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
            hiv2R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
              hiv3L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
              hiv3R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                vlR.animate({height: "100%"}, "slow");
                vlL.animate({height: "100%"}, "slow").queue(function(next){
                     repeat();
                     repeat_R();
                     $(this).queue(function(next){
                       answerR.attr("value", "Answer = " + xR)
                       answerL.attr("value", "Answer = " + xL).delay(2300).queue(function(next) {
                        hiv2L.removeAttr("style").delay(1200);
                        hiv1L.removeAttr("style").delay(1200);
                        hiv3L.removeAttr("style").delay(1200);
                        hlL.css({"width": "0%"});
                        vlL.css({"height": "0%"});
                        hiv2R.removeAttr("style").delay(1200);
                        hiv1R.removeAttr("style").delay(1200);
                        hiv3R.removeAttr("style").delay(1200);
                        hlR.css({"width": "0%"});
                        vlR.css({"height": "0%"});
                        $(this).queue(function(next){
                          loop();
                          next();
                        })
                        next();
                      })
                      next();
                    })
                    next();
                  })
                  next();
                })
                next();
              })
              next();
            })
            next();
          })
          next();
        })
        next();
      })
  }

}

 loop();
})

$("#btnQueryL").click(function(){


 function press() {
   //query.animate({query.addClass("w3-green")});
    //  queryL.addClass("w3-green").delay(200).queue(function(next){
    //    queryL.removeClass('w3-green').queue(function(next){
         hlL.animate({width: "100%"}, "slow").queue(function(next){
               hiv1L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                 hiv2L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                   hiv3L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                     vlL.animate({height: "100%"}, "slow").queue(function(next){
                      repeat();
                      $(this).queue(function(next){
                       answerL.attr("value", "Answer = " + xL).delay(2300).queue(function(next) {
                         hiv2L.removeAttr("style").delay(1200);
                         hiv1L.removeAttr("style").delay(1200);
                         hiv3L.removeAttr("style").delay(1200);
                         hlL.css({"width": "0%"});
                         vlL.css({"height": "0%"});
                           next();
                         })
                         next();
                       })
                       next();
                     })
                     next();
                   })
                   next();
                 })
                 next();
               })
               next();
             })
        //      next();
        //    })
        //    next();
        //  })


 }

  press();
})

$("#btnQueryR").click(function(){


 function press() {
   //query.animate({query.addClass("w3-green")});
    //  queryR.addClass("w3-green").delay(200).queue(function(next){
    //    queryR.removeClass('w3-green').queue(function(next){
         hlR.animate({width: "100%"}, "slow").queue(function(next){
               hiv1R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                 hiv2R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                   hiv3R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                     vlR.animate({height: "100%"}, "slow").queue(function(next){
                      repeat_R();
                      $(this).queue(function(next){
                       answerR.attr("value", "Answer = " + xR).delay(2300).queue(function(next) {
                         hiv2R.removeAttr("style").delay(1200);
                         hiv1R.removeAttr("style").delay(1200);
                         hiv3R.removeAttr("style").delay(1200);
                         hlR.css({"width": "0%"});
                         vlR.css({"height": "0%"});
                           next();
                         })
                         next();
                       })
                       next();
                     })
                     next();
                   })
                   next();
                 })
                 next();
               })
               next();
             })
        //      next();
        //    })
        //    next();
        //  })


 }

  press();
})
