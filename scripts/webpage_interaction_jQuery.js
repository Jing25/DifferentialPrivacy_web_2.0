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
                     //svg_chapter03:repeat();
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
                      //svg_chapter03:repeat();
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
