'use strict'

const qr = require('qr-image');
const fs = require('fs');

// node qr 'encode this string qrimage.png'

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if (dataToEncode !== null && outImage !== null) {
  qr.image(dataToEncode, {
    type: 'png',
    size: 20
  }).pipe(fs.createWriteStream(outImage));

  console.log("QR image for user generated");
}else{
  console.log("Please check the command line arguements");
  console.log("Mode of use");
  console.log("-node qr [data to be encoded] [name of image in png]");
}
