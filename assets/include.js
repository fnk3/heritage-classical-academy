/* =====================================================================
   Shared header + footer injected into every page.
   Each page includes:  <div data-include="header"></div> ... <div data-include="footer"></div>
   then loads this script at the end of <body>.
   Pure JS string injection — works locally (file://) and on Netlify.
   ===================================================================== */
(function () {
  var CAL = "https://docs.google.com/document/d/1ypwxr5_r9rGFX0TstoN0xY2nDSSFCB17dDX4giYkzV4/edit";
  var FUNRUN = "https://runsignup.com/Race/LA/Ruston/HeritageClassicalAcademy5K1MileFunRun";
  var SHIELD = "https://heritageruston.com/wp-content/uploads/2024/11/Heritage_Shield_3.png";

  // White-text Heritage logo, inlined so page-loaded fonts (Gupter/Jost) apply to the wordmark.
  var LOGO = '<svg class="brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744.40709 216.48" role="img" aria-label="Heritage Classical Academy">' +
    '<text x="155.79996" y="139.59998" style="font-family:\'Gupter\',serif;font-weight:500;font-size:159.04px;fill:#ffffff">ERITAGE</text>' +
    '<text x="160.69997" y="183.27997" style="font-family:\'Jost\',\'Avenir\',sans-serif;font-weight:500;font-size:37.33px;letter-spacing:.32em;fill:#ffffff">CLASSICAL ACADEMY</text>' +
    '<g transform="matrix(0.40352826,0,0,0.40352826,-348.22504,17.242806)">' +
      '<g transform="matrix(1.332906,0,0,1.332906,-351.75308,-111.18816)">' +
        '<path style="fill:#151529" d="m 1055.9608,51.36 c -46.7149,10.724177 -95.0154,10.098252 -144.6408,0 v 240.08384 c 0,33.99815 16.01324,66.00376 43.20967,86.38804 L 1055.9503,453.84 1157.371,377.83188 c 27.2069,-20.38428 43.2097,-52.38989 43.2097,-86.38804 V 51.36 c -43.4079,12.205532 -92.2718,10.463375 -144.6304,0 z" />' +
        '<path style="fill:#ffffff" d="m 1056.1309,61.988281 c 47.3722,9.262016 92.666,11.567008 134.0175,2.654297 V 291.44336 c 0,30.71185 -14.4582,59.62867 -39.0332,78.04101 l -95.164,71.32032 -95.16604,-71.32032 C 936.22004,351.07232 921.75195,322.15305 921.75195,291.44336 V 63.833984 c 45.77584,7.901696 90.65755,7.865757 134.37895,-1.845703 z" />' +
        '<path style="fill:#151529" transform="translate(-9.6874999e-6,1.1542969)" d="m 1056.3105,72.617187 c 42.7839,8.184305 84.4737,10.8917 123.4063,4.623047 V 291.44336 c 0,27.42564 -12.9143,53.25288 -34.8574,69.69336 l -88.9082,66.63086 -88.90823,-66.63086 C 945.10908,344.69682 932.18359,318.8647 932.18359,291.44336 V 76.042969 c 42.03993,5.989819 83.49311,5.319872 124.12691,-3.425782 z" />' +
      '</g>' +
      '<path style="fill:#ffffff" transform="translate(-74.216796,84.837145)" d="m 1258.7969,-50.681641 -14.6582,0.796875 c -24.4866,1.330791 -39.94,1.980469 -46.4239,1.980469 -9.7013,0 -21.8603,-0.512207 -36.5918,-1.564453 l -0.205,-0.01563 -24.2852,-1.013672 v 42.3535157 l 13.0371,0.8144532 c 7.8751,0.492194 12.0104,1.4957083 13.7774,2.3203125 0,0 0.5371,0.9201025 0.5371,0.9199219 0.8012,2.7243221 1.4336,7.914853 1.4336,16.4667967 v 48.867188 h -70.9453 V 12.777344 c 0,-8.9974266 0.4647,-13.35432498 1.3671,-16.2421878 l 0.035,-0.1132812 0.033,-0.1113281 0.5371,-0.9199219 0.336,-0.15625 0.3261,-0.1738281 c 1.3544,-0.7223155 5.0677,-1.7262456 13.0703,-1.96875 l 13.4825,-0.4082031 V -50.498047 l -24.295,1.013672 -0.2129,0.01563 c -14.4471,1.050702 -26.7187,1.564453 -36.9746,1.564453 -9.7014,0 -21.8603,-0.512207 -36.5918,-1.564453 l -0.205,-0.01563 -24.2852,-1.013672 v 43.1679689 l 13.4707,0.421875 c 7.7129,0.2410285 11.242,1.2009514 12.6816,1.96875 l 0.3262,0.1738281 0.336,0.15625 0.5371,0.9199219 0.1035,0.3554687 0.125,0.3476563 c 0.8728,2.47290268 1.6055,7.3143694 1.6055,15.7636721 V 167.10547 c 0,8.44931 -0.7327,13.29077 -1.6055,15.76367 l -0.125,0.34766 -0.1035,0.35547 c -0.1855,0.63068 -0.7566,1.25307 -1.045,1.49414 -1.8122,0.70706 -5.6141,1.49893 -12.8359,1.72461 l -13.4707,0.42187 v 43.60352 l 14.8945,-1.06446 c 18.4612,-1.31866 33.8166,-1.96484 46.1875,-1.96484 12.6462,0 28.1309,0.64648 46.5879,1.96484 l 14.8946,1.06446 v -43.61719 l -13.4825,-0.4082 c -7.6153,-0.23077 -11.61,-1.07512 -13.3339,-1.76368 -0.5202,-0.32996 -0.7862,-0.65618 -0.9688,-1.21093 -0.7703,-2.71434 -1.4023,-8.01422 -1.4023,-16.71094 v -59.26172 h 70.9453 v 59.26172 c 0,8.55195 -0.6324,13.74265 -1.4336,16.4668 -0.1855,0.63068 -0.7566,1.25307 -1.0449,1.49414 -1.8123,0.70706 -5.6142,1.49893 -12.836,1.72461 l -13.4707,0.42187 v 43.60352 l 14.8945,-1.06446 c 18.4612,-1.31866 33.8166,-1.96484 46.1875,-1.96484 12.6462,0 27.9872,0.64711 46.1719,1.96484 l 14.9102,1.08008 v -43.61914 l -13.4707,-0.42187 c -7.3436,-0.22949 -11.168,-1.044 -12.9395,-1.75977 -0.5249,-0.33152 -0.7912,-0.6578 -0.9746,-1.21484 -0.7702,-2.71434 -1.4023,-8.01422 -1.4023,-16.71094 V 12.376953 c 0,-8.5504964 0.6335,-13.7400327 1.4355,-16.4667967 l 0.5371,-0.9199219 c 1.767,-0.8246042 5.9023,-1.8281185 13.7774,-2.3203125 l 13.0371,-0.8144532 z" />' +
      '<path style="fill:#a5c9eb" d="m 1170.6757,63.726243 q -12.794,0.799626 -18.7912,3.598317 -5.9972,2.79869 -7.9962,9.595511 -1.9991,6.796821 -1.9991,20.390463 V 252.03816 q 0,13.99345 1.9991,20.79028 1.999,6.397 7.9962,9.59551 5.9972,2.79869 18.7912,3.1985 v 15.19289 q -27.5871,-1.99906 -47.1779,-1.99906 -19.191,0 -47.1779,1.99906 v -15.19289 q 12.794,-0.39981 18.7912,-3.1985 5.9972,-3.19851 7.9962,-9.99533 1.9991,-6.79682 1.9991,-20.39046 v -73.16578 h -98.7538 v 73.16578 q 0,13.99345 1.9991,20.79028 1.999,6.397 7.9962,9.59551 5.9972,2.79869 19.191,3.1985 v 15.19289 q -27.9869,-1.99906 -47.5777,-1.99906 -19.19102,0 -47.17793,1.99906 v -15.19289 q 12.79402,-0.39981 18.79121,-3.1985 5.99719,-3.19851 7.99626,-9.99533 2.39888,-6.79682 2.39888,-20.39046 V 97.710347 q 0,-13.593642 -2.39888,-20.390463 -1.99907,-6.796821 -7.99626,-9.595511 -5.99719,-3.198504 -18.79121,-3.598317 V 48.933162 l 9.59551,0.399813 q 22.38953,1.599252 37.58242,1.599252 15.9925,0 37.9822,-1.599252 l 9.5955,-0.399813 v 15.192894 q -13.1938,0.399813 -19.191,3.598317 -5.9972,2.79869 -7.9962,9.595511 -1.9991,6.397008 -1.9991,20.390463 v 62.370823 h 98.7538 V 97.310534 q 0,-13.593642 -1.9991,-20.390463 -1.999,-6.796821 -7.9962,-9.595511 -5.9972,-2.798691 -18.7912,-3.598317 V 48.933162 l 9.5955,0.399813 q 22.3895,1.599252 37.5824,1.599252 10.3951,0 47.1779,-1.999065 z" />' +
    '</g>' +
  '</svg>';

  var header = '' +
  '<div class="topbar"><div class="wrap">' +
    '<span>Inside Calvary Baptist Church &nbsp;·&nbsp; 5200 Hwy. 167 N, Ruston, LA</span>' +
    '<span class="tb-right">' +
      '<a href="faqs.html">FAQs</a>' +
      '<a href="' + CAL + '" target="_blank" rel="noopener">School Calendar</a>' +
      '<a href="open-house.html">Open House</a>' +
    '</span>' +
  '</div></div>' +
  '<header class="site-header"><nav class="nav">' +
    '<a class="brand" href="index.html">' + LOGO + '</a>' +
    '<button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
    '<ul class="menu">' +
      '<li><a href="index.html">Home</a></li>' +
      '<li><a href="welcome.html" class="dd-toggle">About</a><ul class="submenu">' +
        '<li><a href="welcome.html">Welcome</a></li>' +
        '<li><a href="our-story.html">Our Story</a></li>' +
        '<li><a href="our-mission.html">Our Mission</a></li>' +
        '<li><a href="our-team.html">Our Team</a></li>' +
        '<li><a href="employment.html">Employment</a></li>' +
        '<li><a href="support-us.html">Support Us</a></li>' +
        '<li class="sub-sub"><a href="' + FUNRUN + '" target="_blank" rel="noopener">Heritage 5K / Fun Run</a></li>' +
      '</ul></li>' +
      '<li><a href="application-process.html" class="dd-toggle">Admissions</a><ul class="submenu">' +
        '<li><a href="application-process.html">Application Process</a></li>' +
        '<li><a href="tuition-fees.html">Tuition &amp; Fees</a></li>' +
        '<li class="sub-sub"><a href="tuition-assistance.html">Tuition Assistance</a></li>' +
        '<li><a href="faqs.html">FAQs</a></li>' +
        '<li><a href="open-house.html">Open House</a></li>' +
      '</ul></li>' +
      '<li><a href="grammar-school.html" class="dd-toggle">Academics</a><ul class="submenu">' +
        '<li><a href="grammar-school.html">Grammar School</a></li>' +
        '<li><a href="classical-education.html">Classical Education</a></li>' +
        '<li><a href="christian-education.html">Christian Education</a></li>' +
        '<li><a href="charlotte-mason.html">Charlotte Mason</a></li>' +
      '</ul></li>' +
      '<li class="nav-cta"><a class="btn btn-primary" href="open-house.html">Enroll / Visit</a></li>' +
    '</ul>' +
  '</nav></header>';

  var footer = '' +
  '<footer class="site-footer"><div class="wrap">' +
    '<div class="footer-grid">' +
      '<div class="footer-brand">' + LOGO +
        '<p>A classical Christian school in Ruston, Louisiana, cultivating students of wisdom and virtue for the glory of God.</p>' +
        '<p style="color:#9aa6c0;">Inside Calvary Baptist Church<br>5200 Hwy. 167 N, Ruston, LA 71270</p>' +
      '</div>' +
      '<div><h4>Explore</h4><ul>' +
        '<li><a href="welcome.html">Welcome</a></li>' +
        '<li><a href="our-story.html">Our Story</a></li>' +
        '<li><a href="our-mission.html">Our Mission</a></li>' +
        '<li><a href="our-team.html">Our Team</a></li>' +
        '<li><a href="grammar-school.html">Grammar School</a></li>' +
      '</ul></div>' +
      '<div><h4>Admissions</h4><ul>' +
        '<li><a href="application-process.html">Application Process</a></li>' +
        '<li><a href="tuition-fees.html">Tuition &amp; Fees</a></li>' +
        '<li><a href="tuition-assistance.html">Tuition Assistance</a></li>' +
        '<li><a href="faqs.html">FAQs</a></li>' +
        '<li><a href="open-house.html">Open House</a></li>' +
        '<li><a href="employment.html">Employment</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<p class="nondiscrim"><strong>NOTICE OF NON-DISCRIMINATORY POLICY:</strong> Heritage Classical Academy does not discriminate on the basis of race, color, national or ethnic origin in the administration of its educational, admission, tuition assistance, or employment policies, or any other programs administered by the school.</p>' +
  '</div><div class="copyright">© 2026 Heritage Classical Academy. All Rights Reserved.</div></footer>';

  function inject() {
    // Load the logo wordmark fonts (Gupter for HERITAGE, Jost for the subtitle).
    if (!document.getElementById('hca-logo-fonts')) {
      var f = document.createElement('link');
      f.id = 'hca-logo-fonts';
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Gupter:wght@500&family=Jost:wght@500&display=swap';
      document.head.appendChild(f);
    }
    document.querySelectorAll('[data-include="header"]').forEach(function (el) { el.outerHTML = header; });
    document.querySelectorAll('[data-include="footer"]').forEach(function (el) { el.outerHTML = footer; });

    // nav behaviour (after injection)
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
    }
    document.querySelectorAll('.menu .dd-toggle').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 980) {
          e.preventDefault();
          var li = link.parentElement;
          li.classList.toggle('sub-open');
          var sub = li.querySelector('.submenu');
          if (sub) sub.style.display = li.classList.contains('sub-open') ? 'block' : 'none';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
