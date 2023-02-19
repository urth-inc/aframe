var THREE_R148 = global.THREE = require('three-r148');

// Allow cross-origin images to be loaded.

// This should not be on `THREE.Loader` nor `THREE.ImageUtils`.
// Must be on `THREE.TextureLoader`.
if (THREE_R148.TextureLoader) {
  THREE_R148.TextureLoader.prototype.crossOrigin = 'anonymous';
}

// This is for images loaded from the model loaders.
if (THREE_R148.ImageLoader) {
  THREE_R148.ImageLoader.prototype.crossOrigin = 'anonymous';
}

module.exports = THREE_R148;
