// set left and right paging button value
function setButtonValue() {
  // left button number is the same with right button number
   var btn_l = document.getElementsByClassName("btnL");
   var btn_r = document.getElementsByClassName("btnR");
   if (btn_r.length == btn_l.length) {
     for (var i = 0; i < btn_l.length; i++) {
       $(btn_l[i]).val(i);
       $(btn_r[i]).val(i+2);
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

//start button
// function start(n) {
//   var bars = document.getElementsByClassName("navbar");
//   $(bars[n-1]).addClass("is-done");
//   showDivs(slideIndex = n);
// }

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
  redraw();
  redraw_R();
  chapter1_2_redrawr();
  chapter1_2_redraw();
  dots[slideIndex].className += " current";

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
    index = indexInClass(cn, id[i]);
    $(next[index]).fadeIn(300);
    $(next[index]).fadeIn(300, function() {
      $(this).css('visibility', 'visible')
    });
  }
  $(n).hide(300);
}

// main
var chapter = document.getElementsByClassName("chapter");
$(".chapter").hide()
$(chapter[0]).show()
setNarBarValue();
setButtonValue();
setCompleteValue();
