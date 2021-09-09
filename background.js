chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    'outerBounds': {
      'width': 600,
      'height': 200
    }
  });
});
