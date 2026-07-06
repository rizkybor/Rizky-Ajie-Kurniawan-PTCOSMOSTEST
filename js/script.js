(function () {
  "use strict";
  var mobileNav = document.getElementById("mainNav");
  if (mobileNav && window.jQuery) {
    var links = mobileNav.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        window.jQuery(mobileNav).collapse("hide");
      });
    }
  }
})();
