let pipWindow;

togglePipButton.addEventListener('click', async function(event) {
  console.log('Toggling Picture-in-Picture...');
  togglePipButton.disabled = true;
  try {

    if (hyperplayer !== document.pictureInPictureElement)
      await hyperplayer.requestPictureInPicture();
    else
      await document.exitPictureInPicture();

  } catch(error) {
    console.log(`> Argh! ${error}`);
  } finally {
    togglePipButton.disabled = false;
  }
});

// Note that this can happen if user clicked the "Toggle Picture-in-Picture"
// button but also if user clicked some browser context menu or if
// Picture-in-Picture was triggered automatically for instance.
hyperplayer.addEventListener('enterpictureinpicture', function(event) {
  console.log('> hyperplayer entered Picture-in-Picture');

  pipWindow = event.pictureInPictureWindow;
  console.log(`> Window size is ${pipWindow.width}x${pipWindow.height}`);

  pipWindow.addEventListener('resize', onPipWindowResize);
});

hyperplayer.addEventListener('leavepictureinpicture', function(event) {
  console.log('> hyperplayer left Picture-in-Picture');

  pipWindow.removeEventListener('resize', onPipWindowResize);
});

function onPipWindowResize(event) {
  console.log(`> Window size changed to ${pipWindow.width}x${pipWindow.height}`);
}

/* Feature support */

if ('pictureInPictureEnabled' in document) {
  // Set button ability depending on whether Picture-in-Picture can be used.
  setPipButton();
  hyperplayer.addEventListener('loadedmetadata', setPipButton);
  hyperplayer.addEventListener('emptied', setPipButton);
} else {
  // Hide button if Picture-in-Picture is not supported.
  togglePipButton.hidden = true;
}

function setPipButton() {
  togglePipButton.disabled = (hyperplayer.readyState === 0) ||
                             !document.pictureInPictureEnabled ||
                             hyperplayer.disablePictureInPicture;
}
