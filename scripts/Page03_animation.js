

function page03_anim(section, side) {
  //page03 has two section, left and right side or both
  var queryL;
  var queryR;
  var hlL;
  var hlR;
  var vlL;
  var vlR;
  var hiv1L;
  var hiv1R;
  var hiv2L;
  var hiv2R;
  var hiv3L;
  var hiv3R;
  var answerL;
  var answerR;
  var anim;

  if (section==1) {
    queryL = $("#btnQueryL");
    queryR = $("#btnQueryR")
    hlL = $("#H_lineL");
    hlR = $("#H_lineR");
    vlL = $("#V_lineL");
    vlR = $("#V_lineR");
    hiv1L = $(".HIV1L");
    hiv1R = $(".HIV1R");
    hiv2L = $(".HIV2L");
    hiv2R = $(".HIV2R");
    hiv3L = $(".HIV3L");
    hiv3R = $(".HIV3R");
    answerL = $("#answerL");
    answerR = $("#answerR");
    anim = $("#ch3_08");
    switch (side) {
      case "left":
        pressL();
        break;
      case "right":
        pressR();
        break;
      case "both":
        pressLR();
        break;
    }
  }

  else if (section==2) {
    queryL = $("#btnQueryLchp1-2");
    queryR = $("#btnQueryRchp1-2")
    hlL = $("#H_lineLchp1-2");
    hlR = $("#H_lineRchp1-2");
    vlL = $("#V_lineLchp1-2");
    vlR = $("#V_lineRchp1-2");
    hiv1L = $(".HIV1Lchp1-2");
    hiv1R = $(".HIV1Rchp1-2");
    hiv2L = $(".HIV2Lchp1-2");
    hiv2R = $(".HIV2Rchp1-2");
    hiv3L = $(".HIV3Lchp1-2");
    hiv3R = $(".HIV3Rchp1-2");
    answerL= $("#answerLchp1-2");
    answerR = $("#answerRchp1-2");
    anim = $("#btnAnimationchp1-2");
    switch (side) {
      case "left":
        pressL();
        break;
      case "right":
        pressR();
        break;
      case "both":
        pressLR();
        break;
    }
  }

  function pressL() {
    //query.animate({query.addClass("w3-green")});
     //  queryR.addClass("w3-green").delay(200).queue(function(next){
     //    queryR.removeClass('w3-green').queue(function(next){
          hlL.animate({width: "100%"}, "slow").queue(function(next){
                hiv1L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                  hiv2L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                    hiv3L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                      vlL.animate({height: "100%"}, "slow").queue(function(next){
                       //repeat_R();
                       if(section == 1) {svgL1.update(); answer = svgL1.answer;}
                       else if (section == 2) {svgL2.update(); answer = svgL2.answer;}
                       $(this).queue(function(next){
                        answerL.attr("value", "Answer = " + answer).delay(2300).queue(function(next) {
                          hiv2L.removeAttr("style").delay(1200);
                          hiv1L.removeAttr("style").delay(1200);
                          hiv3L.removeAttr("style").delay(1200);
                          hlL.css({"width": "0%"});
                          vlL.css({"height": "0%"});
                          if (leftShow == 0) {
                            $("#one").css("visibility", "hidden");
                            $("#one").css("display", "block");
                            replace("nextchap1-1",[ch3_02], [ch3_04, two]);
                            leftShow = 1
                          }
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

  function pressR() {
    //query.animate({query.addClass("w3-green")});
     //  queryR.addClass("w3-green").delay(200).queue(function(next){
     //    queryR.removeClass('w3-green').queue(function(next){

          hlR.animate({width: "100%"}).queue(function(next){
                hiv1R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                  hiv2R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                    hiv3R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                      vlR.animate({height: "100%"}).queue(function(next){
                       //repeat_R();
                       console.log(section)
                       if(section == 1) {svgR1.update(); answer = svgR1.answer;}
                       else if (section == 2) {svgR2.update(); answer = svgR2.answer;}
                       $(this).queue(function(next){
                        answerR.attr("value", "Answer = " + answer).delay(1500).queue(function(next) {
                          hiv2R.removeAttr("style");
                          hiv1R.removeAttr("style");
                          hiv3R.removeAttr("style");
                          hlR.css({"width": "0%"});
                          vlR.css({"height": "0%"});
                          if(rightShow == 0)
                          {
                            replace("nextchap1-1",[ch3_05], [three, ch3_07]);
                            rightShow = 1;

                          }

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


  function pressLR() {
    var def = anim.data('default'),
        alt = anim.data('alt');
        (anim.val() == def) ? anim.val(alt) : anim.val(def)

    function loop() {
      if(anim.val() == alt) {
        queryR.addClass("w3-green");
        queryL.addClass("w3-green").delay(200).queue(function(next){
          queryR.removeClass("w3-green");
          queryL.removeClass('w3-green').queue(function(next){
            hlR.animate({width: "100%"});
            hlL.animate({width: "100%"}).queue(function(next){
              hiv1L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
              hiv1R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                hiv2L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
                hiv2R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                  hiv3L.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'});
                  hiv3R.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(next){
                    vlR.animate({height: "100%"});
                    vlL.animate({height: "100%"}).queue(function(next){
                      if(section == 1) {
                        svgL1.update();
                        svgR1.update();
                        ansL = svgL1.answer;
                        ansR = svgR1.answer;
                      }
                      else if (section == 2) {
                        svgL2.update();
                        svgR2.update();
                        ansL = svgL2.answer;
                        ansR = svgR2.answer;
                      }

                         $(this).queue(function(next){
                           answerR.attr("value", "Answer = " + ansR)
                           answerL.attr("value", "Answer = " + ansL).queue(function(next) {
                            hiv2L.removeAttr("style");
                            hiv1L.removeAttr("style");
                            hiv3L.removeAttr("style");
                            hlL.css({"width": "0%"});
                            vlL.css({"height": "0%"});
                            hiv2R.removeAttr("style");
                            hiv1R.removeAttr("style");
                            hiv3R.removeAttr("style");
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
  }
}


function quickAnim() {
  answerL= $("#answerLchp1-2");
  answerR = $("#answerRchp1-2");
  var counter = 0;
  $("#quick").addClass("w3-disabled");
  answerR.attr("value", "Answer = " + svgR2.truth);
  answerL.attr("value", "Answer = " + svgL2.truth);
     intervalId = setInterval(function() {
       svgL2.update();
       svgR2.update();
       if (++counter >= 50) {
           clearInterval(intervalId);
           $("#quick").removeClass("w3-disabled");
        }
      }, 800);
}
