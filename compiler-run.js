/* compiler-run.js - adds a Run button to the compiler title bar.
   The embedded OneCompiler hides its own Run button on narrow screens, so on
   those widths this button tells the embed to run (OneCompiler's documented
   postMessage API; the iframe src needs listenToEvents=true). */
(function () {
  var frame = document.querySelector('.compiler-glass iframe');
  var bar = document.querySelector('.compiler-glass .compiler-bar');
  if (!frame || !bar) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'compiler-run';
  btn.setAttribute('aria-label', 'Run code');
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" fill="currentColor"/></svg>' +
    '<span>Run</span>';

  btn.addEventListener('click', function () {
    if (frame.contentWindow) {
      frame.contentWindow.postMessage({ eventType: 'triggerRun' }, '*');
    }
  });

  bar.appendChild(btn);
})();
