

  $(document).ready(function() {
  $("#btn11").click(function() {
    $(".div2").slideDown(300);
  });
  $("#btn11").click(function() {
    $("#btn11").slideUp(300);
  })
})

$("#btnAnimation").click(function(){
  var query = $("#btnQuery");
  var hl = $("#H_line");
  var hiv1 = $(".HIV1");
  var hiv2 = $(".HIV2");
  var hiv3 = $(".HIV3");
  var answer = $("#answer");

  function loop() {
    //query.animate({query.addClass("w3-green")});
    query.addClass("w3-green");
    setTimeout(function () {
      query.removeClass('w3-green');
    }, 150);
    hl.animate({width: "100%"}, "slow");
    // .delay(500).queue(function() {
    //   hl.removeClass('w3-green').addClass("w3-grey").style({width: "0%"});
    //   hl.animate({width: "0%"});
    //});
     setTimeout(function () {
       hl.removeClass('w3-green').addClass("w3-grey").css({"width": "0%"})
     }, 800);

     hl.removeClass("w3-grey").addClass("w3-green");
     console.log("here")

     setTimeout(function () {
       hiv1.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(){
         hiv2.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function() {
         hiv3.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).dequeue();
       })
     })
      //  hiv3.animate({'backgroundColor': 'rgba(42, 184, 30, 0.64)'}).queue(function(){
      //       answer.attr("value", "Answer = 3").dequeue();
      //  })
     }, 800);


     hiv1.css("background-color", "");
     hiv2.removeAttr("style");
     hiv3.removeAttr("style");
  }
  loop();
})
