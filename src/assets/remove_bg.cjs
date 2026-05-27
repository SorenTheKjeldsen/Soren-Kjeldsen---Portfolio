const { Jimp } = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('src/assets/Logo.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // We want to make the white background transparent.
    // If the image is anti-aliased on white, lighter pixels should become more transparent.
    
    image.scan(0, 0, width, height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const maxColor = Math.max(r, g, b);
      
      // If it's pure white, make it fully transparent
      if (r === 255 && g === 255 && b === 255) {
        this.bitmap.data[idx + 3] = 0;
      } 
      // If it's very close to white (light gray due to anti-aliasing)
      else if (maxColor > 200 && r > 200 && g > 200 && b > 200) {
        const avg = (r + g + b) / 3;
        // Map 200-255 to alpha 255-0
        const alpha = Math.floor(255 * (255 - avg) / (255 - 200));
        this.bitmap.data[idx + 3] = alpha;
      }
    });
    
    await image.write('src/assets/Logo_transparent.png');
    console.log('Successfully made background transparent');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
