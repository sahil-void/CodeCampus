/* theme.js - light / dark switch for Code Campus.
   Loaded in <head> so the right theme is set before the page paints.
   - First visit: follows the visitor's system setting (same as before).
   - After the toggle is used: the choice is remembered in localStorage. */
(function () {
  var KEY = 'cc-theme';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (e) { return null; }
  }

  function system() {
    return mq && mq.matches ? 'dark' : 'light';
  }

  function labels(theme) {
    var next = theme === 'dark' ? 'light' : 'dark';
    var btns = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-label', 'Switch to ' + next + ' mode');
      btns[i].setAttribute('title', 'Switch to ' + next + ' mode');
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    labels(theme);
  }

  apply(stored() || system());

  document.addEventListener('DOMContentLoaded', function () {
    labels(root.getAttribute('data-theme'));
  });

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.theme-toggle') : null;
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, next); } catch (err) { /* private mode */ }
    apply(next);
  });

  /* Follow the system setting until the visitor chooses a theme. */
  if (mq && mq.addEventListener) {
    mq.addEventListener('change', function () {
      if (!stored()) apply(system());
    });
  }
})();
