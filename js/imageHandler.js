const divStart = '<div class="box" draggable="true" ondragstart="drag(event)">';

function makeDiv(segment) {
  return `${divStart}${segment}</div>`
};

function clearDiv() {
  $('#display-status').html('');
  $('#uploaded-image').html('');
}

function loadImage(input) {
  if (input.files && input.files[0]) { } else { return; }

  const reader = new FileReader();

  reader.readAsDataURL(input.files[0]);
  reader.onload = e => startTesseract(e.target.result);
}

function displayStatus(message) {
  $('#display-status').html(`
    <div>
      Status: ${message.status}
    </div>
    <div>
      Progress: ${message.progress * 100}%
    </div>
  `);
  console.log(message);
}

function displayResults(results) {
  clearDiv();

  const resultArray = results.text
  const displayResult = resultArray.split(/\n/g)
    .filter(e => e)
    .map(makeDiv)
    .join('');

  $('#uploaded-image').append(displayResult);
}

function startTesseract(myImage) {
  clearDiv();

  Tesseract.recognize(myImage)
  .progress(displayStatus)
  .catch(displayStatus)
  .then(displayResults);
}
