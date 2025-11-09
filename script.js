(function () {
  'use strict';
  function resetScrollAndRemoveHash() {
    window.scrollTo(0, 0);
    if (location.hash) {
      history.replaceState(null, document.title, location.pathname + location.search);
    }
  }
  window.addEventListener('load', function () {
    setTimeout(resetScrollAndRemoveHash, 0);
  }, { passive: true });

  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setTimeout(resetScrollAndRemoveHash, 0);
    } else {
      resetScrollAndRemoveHash();
    }
  }, { passive: true });

})();