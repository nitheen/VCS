// will be called when the app is started
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('order.html', {
    'bounds': {
      'width': 600,
      'height': Math.round(window.screen.availHeight)
    }
  });
});