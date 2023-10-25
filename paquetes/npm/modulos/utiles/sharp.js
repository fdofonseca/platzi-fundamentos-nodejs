const sharp = require('sharp');

sharp('escritorio.png')
.resize(80)
.grayscale()
.toFile('resizedxD.png');