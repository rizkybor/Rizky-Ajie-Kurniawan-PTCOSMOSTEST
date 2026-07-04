// Custom behaviours on top of Bootstrap 4 (navbar collapse, scrollspy,
// pills and carousel are already handled by Bootstrap's own JS via
// data-* attributes in index.html — this file only adds small extras.
(function () {
  "use strict";

  // Close the mobile menu automatically after a nav link is tapped,
  // so users land on the section instead of staring at an open menu.
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
