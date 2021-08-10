//Write stream example
const fs = require('fs')
const dest = fs.createWriteStream('out.txt') // path:출력의 최종 종착지 (usb01: 1번 USB포트, device01: 1번 디바이스)
const src = process. stdin
src.pipe(dest)
