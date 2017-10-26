// set left and right paging button value
function setButtonValue() {
  // left button number is the same with right button number
   var btn_l = document.getElementsByClassName("btnL");
   var btn_r = document.getElementsByClassName("btnR");
   if (btn_r.length == btn_l.length) {
     for (var i = 0; i < btn_l.length; i++) {
       $(btn_l[i]).val(i-1);
       $(btn_r[i]).val(i+1);
     }
   }
   else {
     alert("paging button number is not the same")
   }

}

//set navigation bar value
function setNarBarValue() {
  // left button number is the same with right button number
  var bar = document.getElementsByClassName("navbar");
  for (var i = 0; i < bar.length; i++) {
    $(bar[i]).val(i);
  }

}

//set complete button value
function setCompleteValue() {
  var btn = document.getElementsByClassName("btn_next");

  for (var i = 0; i < btn.length; i++) {
    $(btn[i]).val(i)
  }
}


function complete(n) {
  var num = +$(n).val();
  var bars = document.getElementsByClassName("navbar");
  $(bars[num]).addClass("is-done");
  showDivs(slideIndex = num+1);
}


function currentDiv(n) {
  var numDiv = +$(n).val();
  showDivs(slideIndex = numDiv);
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("chapter");
  var dots = document.getElementsByClassName("navbar");
  if (n > x.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     //x[i].style.display = "none";
     $(x[i]).hide()
  }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" current", "");
   }
  //x[slideIndex-1].style.display = "block";
  $(x[slideIndex]).show();
  if (slideIndex == 2) {
    // svgL1 = chapter03_draw(svg_l1, "d3_plots_L1", 0, 3, data_L1);
    // svgR1 = chapter03_draw(svg_r1, "d3_plots_R1", 0, 2, data_R1);
  //   svgL1 = chapter03_draw("d3_plots_L1", 0, 3, data_L1);
  //   svgR1 = chapter03_draw("d3_plots_R1", 0, 2, data_R1);
  //   svgL2 = chapter03_draw("d3_plots_L2", 1, 3, data_L2);
  //   svgR2 = chapter03_draw("d3_plots_R2", 1, 2, data_R2);
  //   updateData();
  }

  dots[slideIndex].className += " current";
  $(document).ready(function(){
    $(this).scrollTop(0);
  })
  //dots[slideIndex-1].className.replace("w3-grey", "w3-black")
}

function indexInClass(cn, id) {
  var x = Array.from(document.getElementsByClassName(cn)).indexOf(id);
  return x;
}

//next button (this, classname, id)
function next(n, cn, id) {
  var next = document.getElementsByClassName(cn);
  for (var i = 0; i < id.length; i++) {
    var index = indexInClass(cn, id[i]);
    $(next[index]).fadeIn(300);
    $(next[index]).fadeIn(300, function() {
      $(this).css('visibility', 'visible')
    });
  }
  if (cn == "nextchap1-1" && id.includes(ch3_03)) {
    svgL1 = chapter03_draw("d3_plots_L1", 0, 3, data_L1);
    svgR1 = chapter03_draw("d3_plots_R1", 0, 2, data_R1);
    svgL2 = chapter03_draw("d3_plots_L2", 1, 3, data_L2);
    svgR2 = chapter03_draw("d3_plots_R2", 1, 2, data_R2);
    updateData();
  }
  //  window.scrollBy(0, 300);

  n.scrollIntoView({behavior: "smooth"})
  // var $window = $(window),
  //     $element = $(n),
  //     elementTop = $element.offset().top,
  //     elementHeight = $element.height(),
  //     viewportHeight = $window.height(),
  //     scrollIt = elementTop - ((viewportHeight - elementHeight)*3 / 4);
  //
  // $window.scrollTop(scrollIt);
  $(n).hide(300);
}

function replace(cn, id1, id2) {
  console.log("replace")
  var next = document.getElementsByClassName(cn);
  for (var i = 0; i < id2.length; i++) {
    var index = indexInClass(cn, id2[i]);
    $(next[index]).fadeIn(300);
    $(next[index]).fadeIn(300, function() {
      $(this).css('visibility', 'visible')
    });
  }

  for (var i = 0; i < id1.length; i++) {
    var index = indexInClass(cn, id1[i]);
    $(next[index]).hide(300);
    $(next[index]).hide(300, function() {
      $(this).css('visibility', 'hidden')
    });
  }
  //  window.scrollBy(0, 300);
}

//next button (this, classname, id)
function yesAno(n, cn, id) {
  var next = document.getElementsByClassName(cn);
  var btn = document.getElementsByClassName(n);

  for (var i = 0; i < id.length; i++) {
    index = indexInClass(cn, id[i]);
    $(next[index]).fadeIn(300);
    $(next[index]).fadeIn(300, function() {
      $(this).css('visibility', 'visible')
    });
  }
  //$(next)[indexInClass(cn, id[0])].scrollIntoView(true);
  //window.scrollBy(0, 300);
   //$(btn)[0].scrollIntoView(true)
  //  var $window = $(window),
  //      $element = $(btn[0]),
  //      elementTop = $element.offset().top,
  //      elementHeight = $element.height(),
  //      viewportHeight = $window.height(),
  //      scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
   //
  //  $window.scrollTop(scrollIt);

  btn[0].scrollIntoView({behavior: "smooth"});
  $(btn[0]).hide(300);
  $(btn[1]).hide(300);
}

// main
var chapter = document.getElementsByClassName("chapter");
// $(".chapter").hide()
// $(chapter[0]).show()
//var svg01 = redraw();
//var svg_left = d3.select("#d3_plots_left").append("svg");
setNarBarValue();
setButtonValue();
setCompleteValue();
