# OCR Package Manager POC

Proof of concept for OCR to be used in package management app.

## To Run

### Hosted

[tess-test.surge.sh](http://tess-test.surge.sh)

### Locally

```bash
git clone http://github.com/olmesm/ocr-package-manager-poc
cd ocr-package-manager-poc
npm i -g live-server # or your preferred static site server
live-server
```

1. Open [http://localhost:8080](http://localhost:8080).
1. Upload an image.
1. Drag the output data to editable fields.

## Notes

Tesseract is too slow to run on a mobile client. Would suggest looking into hosting the OCR on a server.

## Resources

* [Tesseract.js](http://tesseract.projectnaptha.com/)
