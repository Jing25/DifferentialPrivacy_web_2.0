var queryLchp12 = $("#btnQueryLchp1-2");
var queryRchp12 = $("#btnQueryRchp1-2")
var hlLchp12 = $("#H_lineLchp1-2");
var hlRchp12 = $("#H_lineRchp1-2");
var vlLchp12 = $("#V_lineLchp1-2");
var vlRchp12 = $("#V_lineRchp1-2");
var hiv1Lchp12 = $(".HIV1Lchp1-2");
var hiv1Rchp12 = $(".HIV1Rchp1-2");
var hiv2Lchp12 = $(".HIV2Lchp1-2");
var hiv2Rchp12 = $(".HIV2Rchp1-2");
var hiv3Lchp12 = $(".HIV3Lchp1-2");
var hiv3Rchp12 = $(".HIV3Rchp1-2");
var answerLchp12 = $("#answerLchp1-2");
var answerRchp12 = $("#answerRchp1-2");
var animchp12 = $("#btnAnimationchp1-2");

//hiv1Rchp12.remove();



animchp12.click(function(){

var def = animchp12.data('default'),
    alt = animchp12.data('alt');
    (animchp12.val() == def) ? animchp12.val(alt) : animchp12.val(def)

function loop() {

  if(animchp12.val() == alt) {
    queryRchp12.addClass("w3-green");
    queryLchp12.addClass("w3-green").delay(200).queue(function(next){
      queryRchp12.removeClass("w3-green");
      queryLchp12.removeClass('w3-green').queue(function(next){
        hlRchp12.animate({width: "100%"}, "slow");
        hlLchp12.animate({width: "100%"}, "slow").queue(function(next){
          hiv1Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
          hiv1Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
            hiv2Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
            hiv2Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
              hiv3Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
              hiv3Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                vlRchp12.animate({height: "100%"}, "slow");
                vlLchp12.animate({height: "100%"}, "slow").queue(function(next){
                  svgL2.update(1)
                  svgR2.update(1)
                     $(this).queue(function(next){
                       answerRchp12.attr("value", "Answer = " + chapter1_2_xR)
                       answerLchp12.attr("value", "Answer = " + chapter1_2_xL).delay(2300).queue(function(next) {
                        hiv2Lchp12.removeAttr("style").delay(1200);
                        hiv1Lchp12.removeAttr("style").delay(1200);
                        hiv3Lchp12.removeAttr("style").delay(1200);
                        hlLchp12.css({"width": "0%"});
                        vlLchp12.css({"height": "0%"});
                        hiv2Rchp12.removeAttr("style").delay(1200);
                        hiv1Rchp12.removeAttr("style").delay(1200);
                        hiv3Rchp12.removeAttr("style").delay(1200);
                        hlRchp12.css({"width": "0%"});
                        vlRchp12.css({"height": "0%"});
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

queryLchp12.click(function(){


 function press() {
   //query.animate({query.addClass("w3-green")});
    //  queryLchp12.addClass("w3-green").delay(200).queue(function(next){
    //    queryLchp12.removeClass('w3-green').queue(function(next){
         hlLchp12.animate({width: "100%"}, "slow").queue(function(next){
               hiv1Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                 hiv2Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                   hiv3Lchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                     vlLchp12.animate({height: "100%"}, "slow").queue(function(next){
                      svgL2.update(1)
                      $(this).queue(function(next){
                       answerLchp12.attr("value", "Answer = " + svgL2.answer).delay(2300).queue(function(next) {
                         hiv2Lchp12.removeAttr("style").delay(1200);
                         hiv1Lchp12.removeAttr("style").delay(1200);
                         hiv3Lchp12.removeAttr("style").delay(1200);
                         hlLchp12.css({"width": "0%"});
                         vlLchp12.css({"height": "0%"});
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

queryRchp12.click(function(){


 function press() {
   //query.animate({query.addClass("w3-green")});
    //  queryRchp12.addClass("w3-green").delay(200).queue(function(next){
    //    queryRchp12.removeClass('w3-green').queue(function(next){
         hlRchp12.animate({width: "100%"}, "slow").queue(function(next){
               hiv1Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                 hiv2Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                   hiv3Rchp12.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                     vlRchp12.animate({height: "100%"}, "slow").queue(function(next){
                      svgR2.update(1)
                      $(this).queue(function(next){
                       answerRchp12.attr("value", "Answer = " + svgR2.answer).delay(2300).queue(function(next) {
                         hiv2Rchp12.removeAttr("style").delay(1200);
                         hiv1Rchp12.removeAttr("style").delay(1200);
                         hiv3Rchp12.removeAttr("style").delay(1200);
                         hlRchp12.css({"width": "0%"});
                         vlRchp12.css({"height": "0%"});
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
