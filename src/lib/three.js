var THREE_MH = require('three-mh');

// Allow cross-origin images to be loaded.

// This should not be on `THREE.Loader` nor `THREE.ImageUtils`.
// Must be on `THREE.TextureLoader`.
if (THREE_MH.TextureLoader) {
  THREE_MH.TextureLoader.prototype.crossOrigin = 'anonymous';
}

// This is for images loaded from the model loaders.
if (THREE_MH.ImageLoader) {
  THREE_MH.ImageLoader.prototype.crossOrigin = 'anonymous';
}

module.exports = THREE_MH;
