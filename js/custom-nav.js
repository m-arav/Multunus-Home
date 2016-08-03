var contactNo = {
  setAnimation: function() {
    $('.contact-no').toggleClass('active');
  }
}

var tagline = {
  setAnimation: function() {
    $('.tagline').toggleClass('active');
  }
}

function timedAnimate() {
  contactNo.setAnimation();
  tagline.setAnimation();
}

$(document).ready(function(){
  tagline.setAnimation();
  window.setInterval(timedAnimate, 3000);
});
