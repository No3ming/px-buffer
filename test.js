var getPixels = require("get-pixels")

getPixels("./1.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("got pixels", Buffer.from(pixels.data))
})
